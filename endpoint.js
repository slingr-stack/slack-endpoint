const endpoint = require('slingr-endpoints'),
    { WebClient } = require('@slack/web-api'),
    moment = require('moment');

let web, userWeb;
endpoint.hooks.onEndpointStart = async () => {
    web = new WebClient(endpoint.endpointConfig.botApiToken);
    userWeb = endpoint.endpointConfig.userApiToken ? new WebClient(endpoint.endpointConfig.userApiToken) : null;
}

// genericSlackRequest
endpoint.functions.__request = async ({ params }) => {
    let opts = params.params;
    if (params.path === 'files.upload') {
        return await uploadFile(opts);
    }
    let fn;
    if (!opts) return { ok: true, message: 'Event response received without params' }; // This validation is because the response to some events is returned from the runtime, so the empty parameter arrives.
    if (userWeb && opts.send_as_user) {
        delete opts.send_as_user;
        fn = params.path.split('.').reduce((o, i) => o[i], userWeb);
    } else {
        fn = params.path.split('.').reduce((o, i) => o[i], web);
    }
    let res = await fn(opts);
    return res;
};

async function uploadFile(options) {
    let content = await endpoint.files.download(options.file_id);
    if (!content) return null;
    // Upload File to Slack
    delete options.file_id;
    options.file = content;
    if (userWeb && options.send_as_user) {
        delete options.send_as_user;
        return await userWeb.files.upload(options);
    }
    return await web.files.upload(options);
};

endpoint.functions.__downloadFile = async ({ params }) => {
    if (!params.file_id) {
        throw 'Empty file id'
    }
    var fileInfo = await web.files.info({ file: params.file_id });
    if (!fileInfo) throw 'File not found';
    // sync download
    if (params.sync) {
        try {
            var downloadResponse = await endpoint.httpModule.get(fileInfo.file.url_private_download);
        } catch (error) {
            endpoint.logger.error('Couldn\'t download the file from [' + fileInfo.file.url_private_download + '].', error);
        }
        return await endpoint.files.upload(fileInfo.file.name, downloadResponse.data);
        // async download
    } else {
        endpoint.httpModule.get(fileInfo.file.url_private_download).then(
            (downloadResponse) => {
                //And upload it to the platform
                endpoint.files.upload(fileInfo.file.name, downloadResponse.data).then(
                    (file) => {
                        //In this case, the info will be sent asynchronously via events
                        endpoint.events.send('fileDownloaded', file);
                    }
                ).catch(
                    (error) => {
                        endpoint.logger.error('Couldn\'t upload the file to platform.', error);
                    }
                );
            }
        ).catch(
            (error) => {
                endpoint.logger.error('Couldn\'t download the file from [' + fileInfo.file.url_private_download + '].', error);
            }
        );
        return { status: 'ok', message: 'A file will be downloaded and then uploaded to the platform. This processing will be made asynchronously. An event will be fired when the download/upload is complete.' };
    }
};

// function used for slashCommands and interactiveMessages features
const responseUrlRequest = async data => {
    if (!data || !data.responseUrl) {
        throw 'Empty response url'
    }
    let response = await endpoint.httpModule.post(data.responseUrl, data.message || {});
    endpoint.appLogger.info("Executed slack request to URL [" + data.responseUrl + "]");
    return response.data
};

endpoint.functions._respondToSlashCommand = async ({ params }) => {
    return await responseUrlRequest(params);
};

endpoint.functions._respondToInteractiveMessage = async ({ params }) => {
    return await responseUrlRequest(params);
};

endpoint.functions.__convertTeam = async ({ params }) => {
    let response = await web.team.info({ team: params.key });
    return { key: params.key, value: response.team.name };
};

endpoint.functions.__convertUser = async ({ params }) => {
    let response = await web.users.info({ user: params.key });
    return { key: params.key, value: response.user.name };
};

endpoint.functions.__convertChannel = async ({ params }) => {
    let value;
    let response = await web.conversations.info({ channel: params.key });
    if (response.channel.is_im) {
        let userResponse = web.users.info({ user: response.channel.user });
        if (userResponse.ok) {
            value = '@' + userResponse.user.name
        } else {
            value = '@' + response.channel.user
        }
    } else if (response.channel.is_channel) {
        value = '#' + response.channel.name
    } else {
        value = response.channel.name
    }
    return { key: params.key, value: value };
};

endpoint.functions.__convertTimestamp = async ({ params }) => {
    let ts = moment(params.key, "X").format('X');
    if (ts) return { key: params.key, value: parseInt(ts) * 1000 };
};

// web services
endpoint.webServices.events = {
    method: 'POST',
    path: '/events',
    handler: (req, res) => {
        let payload = endpoint.parsePayloadType(req.body) || {};
        if (payload.token !== endpoint.endpointConfig.verificationToken) {
            endpoint.appLogger.error('Invalid [verificationToken]', payload);
            return res.status(401).send('Error');
        }
        if (payload.type === 'url_verification') return res.send(payload.challenge);
        endpoint.events.send('httpEventArrived', payload.event);
        res.send('ok');
    }
}

endpoint.webServices.slashCommands = {
    method: 'POST',
    path: '/slashCommands',
    handler: async (req, res) => {
        let payload = endpoint.parsePayloadType(req.body) || {};
        if (payload.token !== endpoint.endpointConfig.verificationToken) {
            endpoint.appLogger.error('Invalid [verificationToken]', payload);
            return res.status(401).send('Error');
        }
        endpoint.appLogger.info(`Received slash command [${payload.command}]`);
        endpoint.events.send('slashCommand', payload);
        res.send('');
    }
};

endpoint.webServices.interactiveMessages = {
    method: 'POST',
    path: '/interactiveMessages',
    handler: async (req, res) => {
        let payload = endpoint.parsePayloadType(req.body.payload) || {};
        if (payload.token !== endpoint.endpointConfig.verificationToken) {
            endpoint.appLogger.error('Invalid [verificationToken]', payload);
            return res.status(401).send('Error');
        }
        endpoint.appLogger.info(`Received interactive message`);
        endpoint.events.send('interactiveMessage', payload || {});
        res.send('');
    }
};

endpoint.webServices.optionsLoad = {
    method: 'POST',
    path: '/optionsLoad',
    handler: async (req, res) => {
        let payload = endpoint.parsePayloadType(req.body.payload) || {};
        if (payload.token !== endpoint.endpointConfig.verificationToken) {
            endpoint.appLogger.error('Invalid [verificationToken]', payload);
            return res.status(401).send('Error');
        }
        endpoint.appLogger.info(`Received options load`);
        endpoint.events.send('optionsLoad', payload || {});
        res.send('ok');
    }
};

endpoint.webServices.optionsLoad = {
    method: 'POST',
    path: '/optionsLoad',
    handler: async (req, res) => {
        let payload = endpoint.parsePayloadType(req.body.payload) || {};
        if (payload.token !== endpoint.endpointConfig.verificationToken) {
            endpoint.appLogger.error('Invalid [verificationToken]', payload);
            return res.status(401).send('Error');
        }
        if (payload.ssl_check) {
            res.send({});
            return {};
        }
        endpoint.appLogger.info(`Received options load`);
        let options = [];
        try {
            options = await endpoint.events.sendSync('optionsLoad', payload || {});
        } catch (e) {
            endpoint.appLogger.error('There was an error loading options', e);
        }
        res.send(options);
    }
};

// function to parse the payload type if it is not an object
endpoint.parsePayloadType = (payload) => {
    return (typeof (payload) !== 'object') ? JSON.parse(payload) : payload;
};

endpoint.start();