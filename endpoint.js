// TODO:
// - Events: eventArrived (RTM Client) - In Progress
// - Functions: __downloadFile (callback: fileDownloaded) - Pending

// - Functions:
// - get -> genericSlackRequest() - Done
// - post -> genericSlackRequest() - Done
// - _respondToSlashCommand, - Done
// - _respondToInteractiveMessage - Done
// - __convertTeam - Done
// - __convertUser - Done
// - __convertChannel - Done
// - __convertTimestamp - Done
// - __convertEvent - Deprecated

const endpoint = require('slingr-endpoints'),
    { WebClient } = require('@slack/web-api'),
    { createReadStream } = require('fs'),
    moment = require('moment');

let web;
endpoint.hooks.onEndpointStart = async () => {
    web = new WebClient(endpoint.endpointConfig.botApiToken);
}

// genericSlackRequest
endpoint.functions.__request = async ({ params }) => {
    let opts = params.params;
    if (params.path === 'files.upload') {
        uploadFile(params.file_id)
        return { uploadFile: true };
    }
    let fn = params.path.split('.').reduce((o, i) => o[i], web)
    let res = await fn(opts);
    return res;
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

endpoint.functions.__downloadFile = async ({ params, id }) => {
    // private genericDownloadRequest()
    (async () => {
        // await endpoint.files.download(fileId); // If file is from slingr
        // when file finished download
        // if file is from slack use slack client
        // endpoint.events.send('fileDownloaded', fileDownloaded, id);
    })();
    return { ok: true };
}

async function uploadFile(fileId, fileName) {
    let content = await endpoint.files.download(fileId);
    if (!content) return null;
    // Upload File to Slack
    return await web.files.upload({
        filename: fileName || new Date().getTime(),
        file: createReadStream(content)
    });
}

// web services
endpoint.webServices.events = {
    method: 'POST',
    path: '/events',
    handler: (req, res) => {
        let payload = req.body || {};
        let token = endpoint.endpointConfig.slashCommandsToken;
        if (token !== payload.token) {
            endpoint.appLogger.error('Invalid [slashCommandsToken]', payload);
            return res.status(401).send('Error');
        }
        if (payload.type === 'url_verification') {
            endpoint.appLogger.info('Invalid [slashCommandsToken]', payload);
            return res.send(payload.challenge);
        }
        endpoint.events.send('httpEventArrived', payload);
    }
}

endpoint.webServices.slashCommands = {
    method: 'POST',
    path: '/slashCommands',
    handler: async (req, res) => {
        let payload = req.body || {};
        let token = endpoint.endpointConfig.slashCommandsToken;
        if (token !== payload.token) {
            endpoint.appLogger.error('Invalid [slashCommandsToken]', payload);
            return res.status(401).send('Error');
        }
        endpoint.appLogger.info(`Received slash command [${payload.command}]`);
        endpoint.events.send('slashCommand', payload);
        res.send('');
    }
}

endpoint.webServices.interactiveMessages = {
    method: 'POST',
    path: '/interactiveMessages',
    handler: async (req, res) => {
        endpoint.appLogger.info(`Received interactive message`);
        endpoint.events.send('interactiveMessage', req.body || {});
        res.send('');
    }
}

endpoint.webServices.optionsLoad = {
    method: 'POST',
    path: '/optionsLoad',
    handler: async (req, res) => {
        endpoint.appLogger.info(`Received options load`);
        endpoint.events.send('optionsLoad', req.body || {});
        res.send('ok');
    }
}

endpoint.start();