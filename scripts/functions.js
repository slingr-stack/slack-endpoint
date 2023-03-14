
var genericSlackFunction = function (options) {
    options = options || {};
    return endpoint.__request(options);
};

var slackFunction = function (path, options) {
    options = options || {};
    return genericSlackFunction({
        path: path,
        params: options
    });
};

var downloadFile = function (options, callbackData, callbacks) {
    options = options || {};
    return endpoint.__downloadFile(options, callbackData, callbacks);
};

var respondToSlashCommand = function (url, msg) {
    if (!url) throw 'URL is empty';
    return endpoint._respondToSlashCommand({ responseUrl: url, message: msg });
};

var respondToInteractiveMessage = function (url, msg) {
    if (!url) throw 'URL is empty';
    return endpoint._respondToInteractiveMessage({ responseUrl: url, message: msg });
};

/////////////////////
// Public API
/////////////////////
endpoint.api = {};
endpoint.api.test = function (options) { return slackFunction('api.test', options) };

endpoint.auth = {};
endpoint.auth.revoke = function (options) { return slackFunction('auth.revoke', options) };
endpoint.auth.test = function (options) { return slackFunction('auth.test', options) };

endpoint.bots = {};
endpoint.bots.info = function (options) { return slackFunction('bots.info', options) };

endpoint.channels = {};
endpoint.channels.archive = function (options) { return slackFunction('channels.archive', options) };
endpoint.channels.create = function (options) { return slackFunction('channels.create', options) };
endpoint.channels.history = function (options) { return slackFunction('channels.history', options) };
endpoint.channels.info = function (options) { return slackFunction('channels.info', options) };
endpoint.channels.invite = function (options) { return slackFunction('channels.invite', options) };
endpoint.channels.join = function (options) { return slackFunction('channels.join', options) };
endpoint.channels.kick = function (options) { return slackFunction('channels.kick', options) };
endpoint.channels.leave = function (options) { return slackFunction('channels.leave', options) };
endpoint.channels.list = function (options) { return slackFunction('channels.list', options) };
endpoint.channels.mark = function (options) { return slackFunction('channels.mark', options) };
endpoint.channels.rename = function (options) { return slackFunction('channels.rename', options) };
endpoint.channels.replies = function (options) { return slackFunction('channels.replies', options) };
endpoint.channels.setPurpose = function (options) { return slackFunction('channels.setPurpose', options) };
endpoint.channels.setTopic = function (options) { return slackFunction('channels.setTopic', options) };
endpoint.channels.unarchive = function (options) { return slackFunction('channels.unarchive', options) };

endpoint.chat = {};
endpoint.chat.delete = function (options) { return slackFunction('chat.delete', options) };
endpoint.chat.meMessage = function (options) { return slackFunction('chat.meMessage', options) };
endpoint.chat.postMessage = function (options) { return slackFunction('chat.postMessage', options) };
endpoint.chat.unfurl = function (options) { return slackFunction('chat.unfurl', options) };
endpoint.chat.update = function (options) { return slackFunction('chat.update', options) };

endpoint.conversations = {};
endpoint.conversations.archive = function (options) { return slackFunction('conversations.archive', options) };
endpoint.conversations.close = function (options) { return slackFunction('conversations.close', options) };
endpoint.conversations.create = function (options) { return slackFunction('conversations.create', options) };
endpoint.conversations.history = function (options) { return slackFunction('conversations.history', options) };
endpoint.conversations.info = function (options) { return slackFunction('conversations.info', options) };
endpoint.conversations.invite = function (options) { return slackFunction('conversations.invite', options) };
endpoint.conversations.join = function (options) { return slackFunction('conversations.join', options) };
endpoint.conversations.kick = function (options) { return slackFunction('conversations.kick', options) };
endpoint.conversations.leave = function (options) { return slackFunction('conversations.leave', options) };
endpoint.conversations.list = function (options) { return slackFunction('conversations.list', options) };
endpoint.conversations.members = function (options) { return slackFunction('conversations.members', options) };
endpoint.conversations.open = function (options) { return slackFunction('conversations.open', options) };
endpoint.conversations.rename = function (options) { return slackFunction('conversations.rename', options) };
endpoint.conversations.replies = function (options) { return slackFunction('conversations.replies', options) };
endpoint.conversations.setPurpose = function (options) { return slackFunction('conversations.setPurpose', options) };
endpoint.conversations.setTopic = function (options) { return slackFunction('conversations.setTopic', options) };
endpoint.conversations.unarchive = function (options) { return slackFunction('conversations.unarchive', options) };

endpoint.dialog = {};
endpoint.dialog.open = function (options) { return slackFunction('dialog.open', options) };

endpoint.views = {};
endpoint.views.open = function (options) { return slackFunction('views.open', options) };
endpoint.views.update = function (options) { return slackFunction('views.update', options) };
endpoint.views.publish = function (options) { return slackFunction('views.publish', options) };
endpoint.views.push = function (options) { return slackFunction('views.push', options) };

endpoint.dnd = {};
endpoint.dnd.endDnd = function (options) { return slackFunction('dnd.endDnd', options) };
endpoint.dnd.endSnooze = function (options) { return slackFunction('dnd.endSnooze', options) };
endpoint.dnd.info = function (options) { return slackFunction('dnd.info', options) };
endpoint.dnd.setSnooze = function (options) { return slackFunction('dnd.setSnooze', options) };
endpoint.dnd.teamInfo = function (options) { return slackFunction('dnd.teamInfo', options) };

endpoint.emoji = {};
endpoint.emoji.list = function (options) { return slackFunction('emoji.list', options) };

endpoint.files = {};
endpoint.files.comments = {};
endpoint.files.comments.add = function (options) { return slackFunction('files.comments.add', options) };
endpoint.files.comments.delete = function (options) { return slackFunction('files.comments.delete', options) };
endpoint.files.comments.edit = function (options) { return slackFunction('files.comments.edit', options) };
endpoint.files.delete = function (options) { return slackFunction('files.delete', options) };
endpoint.files.info = function (options) { return slackFunction('files.info', options) };
endpoint.files.list = function (options) { return slackFunction('files.list', options) };
endpoint.files.revokePublicURL = function (options) { return slackFunction('files.revokePublicURL', options) };
endpoint.files.sharedPublicURL = function (options) { return slackFunction('files.sharedPublicURL', options) };
endpoint.files.upload = function (options) { return slackFunction('files.upload', options) };
endpoint.files.download = function (options, callbackData, callbacks) { return downloadFile(options, callbackData, callbacks) };

endpoint.groups = {};
endpoint.groups.archive = function (options) { return slackFunction('groups.archive', options) };
endpoint.groups.close = function (options) { return slackFunction('groups.close', options) };
endpoint.groups.create = function (options) { return slackFunction('groups.create', options) };
endpoint.groups.createChild = function (options) { return slackFunction('groups.createChild', options) };
endpoint.groups.history = function (options) { return slackFunction('groups.history', options) };
endpoint.groups.info = function (options) { return slackFunction('groups.info', options) };
endpoint.groups.invite = function (options) { return slackFunction('groups.invite', options) };
endpoint.groups.kick = function (options) { return slackFunction('groups.kick', options) };
endpoint.groups.leave = function (options) { return slackFunction('groups.leave', options) };
endpoint.groups.list = function (options) { return slackFunction('groups.list', options) };
endpoint.groups.mark = function (options) { return slackFunction('groups.mark', options) };
endpoint.groups.open = function (options) { return slackFunction('groups.open', options) };
endpoint.groups.rename = function (options) { return slackFunction('groups.rename', options) };
endpoint.groups.replies = function (options) { return slackFunction('groups.replies', options) };
endpoint.groups.setPurpose = function (options) { return slackFunction('groups.setPurpose', options) };
endpoint.groups.setTopic = function (options) { return slackFunction('groups.setTopic', options) };
endpoint.groups.unarchive = function (options) { return slackFunction('groups.unarchive', options) };

endpoint.im = {};
endpoint.im.close = function (options) { return slackFunction('im.close', options) };
endpoint.im.history = function (options) { return slackFunction('im.history', options) };
endpoint.im.list = function (options) { return slackFunction('im.list', options) };
endpoint.im.mark = function (options) { return slackFunction('im.mark', options) };
endpoint.im.open = function (options) { return slackFunction('im.open', options) };
endpoint.im.replies = function (options) { return slackFunction('im.replies', options) };

endpoint.mpim = {};
endpoint.mpim.close = function (options) { return slackFunction('mpim.close', options) };
endpoint.mpim.history = function (options) { return slackFunction('mpim.history', options) };
endpoint.mpim.list = function (options) { return slackFunction('mpim.list', options) };
endpoint.mpim.mark = function (options) { return slackFunction('mpim.mark', options) };
endpoint.mpim.open = function (options) { return slackFunction('mpim.open', options) };
endpoint.mpim.replies = function (options) { return slackFunction('mpim.replies', options) };

endpoint.oauth = {};
endpoint.oauth.access = function (options) { return slackFunction('oauth.access', options) };

endpoint.pins = {};
endpoint.pins.add = function (options) { return slackFunction('pins.add', options) };
endpoint.pins.list = function (options) { return slackFunction('pins.list', options) };
endpoint.pins.remove = function (options) { return slackFunction('pins.remove', options) };

endpoint.reactions = {};
endpoint.reactions.add = function (options) { return slackFunction('reactions.add', options) };
endpoint.reactions.get = function (options) { return slackFunction('reactions.get', options) };
endpoint.reactions.list = function (options) { return slackFunction('reactions.list', options) };
endpoint.reactions.remove = function (options) { return slackFunction('reactions.remove', options) };

endpoint.reminders = {};
endpoint.reminders.add = function (options) { return slackFunction('reminders.add', options) };
endpoint.reminders.complete = function (options) { return slackFunction('reminders.complete', options) };
endpoint.reminders.delete = function (options) { return slackFunction('reminders.delete', options) };
endpoint.reminders.info = function (options) { return slackFunction('reminders.info', options) };
endpoint.reminders.list = function (options) { return slackFunction('reminders.list', options) };

endpoint.rtm = {};
endpoint.rtm.start = function (options) { return slackFunction('rtm.start', options) };
endpoint.rtm.connect = function (options) { return slackFunction('rtm.connect', options) };

endpoint.search = {};
endpoint.search.all = function (options) { return slackFunction('search.all', options) };
endpoint.search.files = function (options) { return slackFunction('search.files', options) };
endpoint.search.messages = function (options) { return slackFunction('search.messages', options) };

endpoint.stars = {};
endpoint.stars.add = function (options) { return slackFunction('stars.add', options) };
endpoint.stars.list = function (options) { return slackFunction('stars.list', options) };
endpoint.stars.remove = function (options) { return slackFunction('stars.remove', options) };

endpoint.team = {};
endpoint.team.accessLogs = function (options) { return slackFunction('team.accessLogs', options) };
endpoint.team.billableInfo = function (options) { return slackFunction('team.billableInfo', options) };
endpoint.team.info = function (options) { return slackFunction('team.info', options) };
endpoint.team.integrationLogs = function (options) { return slackFunction('team.integrationLogs', options) };

endpoint.team.profile = {};
endpoint.team.profile.get = function (options) { return slackFunction('team.profile.get', options) };

endpoint.usergroups = {};
endpoint.usergroups.create = function (options) { return slackFunction('usergroups.create', options) };
endpoint.usergroups.disable = function (options) { return slackFunction('usergroups.disable', options) };
endpoint.usergroups.enable = function (options) { return slackFunction('usergroups.enable', options) };
endpoint.usergroups.list = function (options) { return slackFunction('usergroups.list', options) };
endpoint.usergroups.update = function (options) { return slackFunction('usergroups.update', options) };
endpoint.usergroups.users = {};
endpoint.usergroups.users.list = function (options) { return slackFunction('usergroups.users.list', options) };
endpoint.usergroups.users.update = function (options) { return slackFunction('usergroups.users.update', options) };

endpoint.users = {};
endpoint.users.deletePhoto = function (options) { return slackFunction('users.deletePhoto', options) };
endpoint.users.getPresence = function (options) { return slackFunction('users.getPresence', options) };
endpoint.users.identity = function (options) { return slackFunction('users.identity', options) };
endpoint.users.info = function (options) { return slackFunction('users.info', options) };
endpoint.users.list = function (options) { return slackFunction('users.list', options) };
endpoint.users.lookupByEmail = function (options) { return slackFunction('users.lookupByEmail', options) };
endpoint.users.setActive = function (options) { return slackFunction('users.setActive', options) };
endpoint.users.setPhoto = function (options) { return slackFunction('users.setPhoto', options) };
endpoint.users.setPresence = function (options) { return slackFunction('users.setPresence', options) };
endpoint.users.profile = {};
endpoint.users.profile.get = function (options) { return slackFunction('users.profile.get', options) };
endpoint.users.profile.set = function (options) { return slackFunction('users.profile.set', options) };

// generic functions
endpoint.get = function (options) { return genericSlackFunction(options) };
endpoint.post = function (options) { return genericSlackFunction(options) };

/////////////////////
// helpers
/////////////////////

endpoint.respondToSlashCommand = respondToSlashCommand;
endpoint.respondToInteractiveMessage = respondToInteractiveMessage;

/////////////////////
// conversions
/////////////////////

endpoint.getTeamName = function (id) {
    if (!id) {
        throw 'Team id is empty'
    }
    var response = null;
    var r = endpoint.__convertTeam({
        key: id
    });
    if (r && r.value) {
        response = r.value;
    }
    return response;
};

endpoint.getUserName = function (id) {
    if (!id) {
        throw 'User id is empty'
    }
    var response = null;
    var r = endpoint.__convertUser({
        key: id
    });
    if (r && r.value) {
        response = r.value;
    }
    return response;
};

endpoint.getChannelName = function (id) {
    if (!id) {
        throw 'Channel id is empty'
    }
    var response = null;
    var r = endpoint.__convertChannel({
        key: id
    });
    if (r && r.value) {
        response = r.value;
    }
    return response;
};

endpoint.getDate = function (timestamp) {
    if (!timestamp) {
        throw 'Timestamp is empty'
    }
    var response = null;
    var r = endpoint.__convertTimestamp({
        key: timestamp
    });
    if (r && r.value) {
        response = new Date(r.value);
    }
    return response;
};


////////////////////////////////////////////////////////////////////////////
//                                                                        //
//             This file was generated with "slingr-helpgen"              //
//                                                                        //
//               For more info, check the following links:                //
//             https://www.npmjs.com/package/slingr-helpgen               //
//           https://github.com/slingr-stack/slingr-helpgen               //
//                                                                        //
////////////////////////////////////////////////////////////////////////////

endpoint.apiTest = {};

endpoint.authRevoke = {};

endpoint.authTest = {};

endpoint.botsInfo = {};

endpoint.channelsArchive = {};

endpoint.channelsCreate = {};

endpoint.channelsHistory = {};

endpoint.channelsInfo = {};

endpoint.channelsInvite = {};

endpoint.channelsJoin = {};

endpoint.channelsKick = {};

endpoint.channelsLeave = {};

endpoint.channelsList = {};

endpoint.channelsMark = {};

endpoint.channelsRename = {};

endpoint.channelsReplies = {};

endpoint.channelsSetPurpose = {};

endpoint.channelsSetTopic = {};

endpoint.channelsUnarchive = {};

endpoint.chatDelete = {};

endpoint.chatMeMessage = {};

endpoint.chatPostMessage = {};

endpoint.chatUnfurl = {};

endpoint.chatUpdate = {};

endpoint.conversationsArchive = {};

endpoint.conversationsClose = {};

endpoint.conversationsCreate = {};

endpoint.conversationsHistory = {};

endpoint.conversationsInfo = {};

endpoint.conversationsInvite = {};

endpoint.conversationsJoin = {};

endpoint.conversationsKick = {};

endpoint.conversationsLeave = {};

endpoint.conversationsList = {};

endpoint.conversationsMembers = {};

endpoint.conversationsOpen = {};

endpoint.conversationsRename = {};

endpoint.conversationsReplies = {};

endpoint.conversationsSetPurpose = {};

endpoint.conversationsSetTopic = {};

endpoint.conversationsUnarchive = {};

endpoint.dialogOpen = {};

endpoint.viewsOpen = {};

endpoint.viewsUpdate = {};

endpoint.viewsPublish = {};

endpoint.viewsPush = {};

endpoint.dndEndDnd = {};

endpoint.dndEndSnooze = {};

endpoint.dndInfo = {};

endpoint.dndSetSnooze = {};

endpoint.dndTeamInfo = {};

endpoint.emojiList = {};

endpoint.filesCommentsAdd = {};

endpoint.filesCommentsDelete = {};

endpoint.filesCommentsEdit = {};

endpoint.filesDelete = {};

endpoint.filesInfo = {};

endpoint.filesList = {};

endpoint.filesRevokePublicURL = {};

endpoint.filesSharedPublicURL = {};

endpoint.filesUpload = {};

endpoint.groupsArchive = {};

endpoint.groupsClose = {};

endpoint.groupsCreate = {};

endpoint.groupsCreateChild = {};

endpoint.groupsHistory = {};

endpoint.groupsInfo = {};

endpoint.groupsInvite = {};

endpoint.groupsKick = {};

endpoint.groupsLeave = {};

endpoint.groupsList = {};

endpoint.groupsMark = {};

endpoint.groupsOpen = {};

endpoint.groupsRename = {};

endpoint.groupsReplies = {};

endpoint.groupsSetPurpose = {};

endpoint.groupsSetTopic = {};

endpoint.groupsUnarchive = {};

endpoint.imClose = {};

endpoint.imHistory = {};

endpoint.imList = {};

endpoint.imMark = {};

endpoint.imOpen = {};

endpoint.imReplies = {};

endpoint.mpimClose = {};

endpoint.mpimHistory = {};

endpoint.mpimList = {};

endpoint.mpimMark = {};

endpoint.mpimOpen = {};

endpoint.mpimReplies = {};

endpoint.oauthAccess = {};

endpoint.pinsAdd = {};

endpoint.pinsList = {};

endpoint.pinsRemove = {};

endpoint.reactionsAdd = {};

endpoint.reactionsGet = {};

endpoint.reactionsList = {};

endpoint.reactionsRemove = {};

endpoint.remindersAdd = {};

endpoint.remindersComplete = {};

endpoint.remindersDelete = {};

endpoint.remindersInfo = {};

endpoint.remindersList = {};

endpoint.rtmStart = {};

endpoint.rtmConnect = {};

endpoint.searchAll = {};

endpoint.searchFiles = {};

endpoint.searchMessages = {};

endpoint.starsAdd = {};

endpoint.starsList = {};

endpoint.starsRemove = {};

endpoint.teamAccessLogs = {};

endpoint.teamBillableInfo = {};

endpoint.teamInfo = {};

endpoint.teamIntegrationLogs = {};

endpoint.teamProfileGet = {};

endpoint.usergroupsCreate = {};

endpoint.usergroupsDisable = {};

endpoint.usergroupsEnable = {};

endpoint.usergroupsList = {};

endpoint.usergroupsUpdate = {};

endpoint.usergroupsUsersList = {};

endpoint.usergroupsUsersUpdate = {};

endpoint.usersDeletePhoto = {};

endpoint.usersGetPresence = {};

endpoint.usersIdentity = {};

endpoint.usersInfo = {};

endpoint.usersList = {};

endpoint.usersLookupByEmail = {};

endpoint.usersSetActive = {};

endpoint.usersSetPhoto = {};

endpoint.usersSetPresence = {};

endpoint.usersProfileGet = {};

endpoint.usersProfileSet = {};

endpoint.apiTest.post = function(httpOptions) {
    var url = 'api.test';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.authRevoke.get = function(httpOptions) {
    var url = 'auth.revoke';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.authTest.post = function(httpOptions) {
    var url = 'auth.test';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.botsInfo.get = function(httpOptions) {
    var url = 'bots.info';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.channelsArchive.post = function(httpOptions) {
    var url = 'channels.archive';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.channelsCreate.post = function(httpOptions) {
    var url = 'channels.create';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.channelsHistory.get = function(httpOptions) {
    var url = 'channels.history';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.channelsInfo.get = function(httpOptions) {
    var url = 'channels.info';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.channelsInvite.post = function(httpOptions) {
    var url = 'channels.invite';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.channelsJoin.post = function(httpOptions) {
    var url = 'channels.join';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.channelsKick.post = function(httpOptions) {
    var url = 'channels.kick';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.channelsLeave.post = function(httpOptions) {
    var url = 'channels.leave';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.channelsList.get = function(httpOptions) {
    var url = 'channels.list';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.channelsMark.post = function(httpOptions) {
    var url = 'channels.mark';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.channelsRename.post = function(httpOptions) {
    var url = 'channels.rename';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.channelsReplies.get = function(httpOptions) {
    var url = 'channels.replies';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.channelsSetPurpose.post = function(httpOptions) {
    var url = 'channels.setPurpose';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.channelsSetTopic.post = function(httpOptions) {
    var url = 'channels.setTopic';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.channelsUnarchive.post = function(httpOptions) {
    var url = 'channels.unarchive';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.chatDelete.post = function(httpOptions) {
    var url = 'chat.delete';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.chatMeMessage.post = function(httpOptions) {
    var url = 'chat.meMessage';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.chatPostMessage.post = function(httpOptions) {
    var url = 'chat.postMessage';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.chatUnfurl.post = function(httpOptions) {
    var url = 'chat.unfurl';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.chatUpdate.post = function(httpOptions) {
    var url = 'chat.update';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsArchive.post = function(httpOptions) {
    var url = 'conversations.archive';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsClose.post = function(httpOptions) {
    var url = 'conversations.close';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsCreate.post = function(httpOptions) {
    var url = 'conversations.create';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsHistory.get = function(httpOptions) {
    var url = 'conversations.history';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsInfo.get = function(httpOptions) {
    var url = 'conversations.info';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsInvite.post = function(httpOptions) {
    var url = 'conversations.invite';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsJoin.post = function(httpOptions) {
    var url = 'conversations.join';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsKick.post = function(httpOptions) {
    var url = 'conversations.kick';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsLeave.post = function(httpOptions) {
    var url = 'conversations.leave';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsList.get = function(httpOptions) {
    var url = 'conversations.list';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsMembers.get = function(httpOptions) {
    var url = 'conversations.members';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsOpen.post = function(httpOptions) {
    var url = 'conversations.open';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsRename.post = function(httpOptions) {
    var url = 'conversations.rename';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsReplies.get = function(httpOptions) {
    var url = 'conversations.replies';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsSetPurpose.post = function(httpOptions) {
    var url = 'conversations.setPurpose';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsSetTopic.post = function(httpOptions) {
    var url = 'conversations.setTopic';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.conversationsUnarchive.post = function(httpOptions) {
    var url = 'conversations.unarchive';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.dialogOpen.post = function(httpOptions) {
    var url = 'dialog.open';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.viewsOpen.post = function(httpOptions) {
    var url = 'views.open';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.viewsUpdate.post = function(httpOptions) {
    var url = 'views.update';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.viewsPublish.post = function(httpOptions) {
    var url = 'views.publish';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.viewsPush.post = function(httpOptions) {
    var url = 'views.push';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.dndEndDnd.post = function(httpOptions) {
    var url = 'dnd.endDnd';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.dndEndSnooze.post = function(httpOptions) {
    var url = 'dnd.endSnooze';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.dndInfo.get = function(httpOptions) {
    var url = 'dnd.info';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.dndSetSnooze.get = function(httpOptions) {
    var url = 'dnd.setSnooze';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.dndTeamInfo.get = function(httpOptions) {
    var url = 'dnd.teamInfo';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.emojiList.get = function(httpOptions) {
    var url = 'emoji.list';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.filesCommentsAdd.post = function(httpOptions) {
    var url = 'files.comments.add';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.filesCommentsDelete.post = function(httpOptions) {
    var url = 'files.comments.delete';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.filesCommentsEdit.post = function(httpOptions) {
    var url = 'files.comments.edit';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.filesDelete.post = function(httpOptions) {
    var url = 'files.delete';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.filesInfo.get = function(httpOptions) {
    var url = 'files.info';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.filesList.get = function(httpOptions) {
    var url = 'files.list';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.filesRevokePublicURL.post = function(httpOptions) {
    var url = 'files.revokePublicURL';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.filesSharedPublicURL.post = function(httpOptions) {
    var url = 'files.sharedPublicURL';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.filesUpload.post = function(httpOptions) {
    var url = 'files.upload';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsArchive.post = function(httpOptions) {
    var url = 'groups.archive';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsClose.post = function(httpOptions) {
    var url = 'groups.close';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsCreate.post = function(httpOptions) {
    var url = 'groups.create';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsCreateChild.post = function(httpOptions) {
    var url = 'groups.createChild';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsHistory.get = function(httpOptions) {
    var url = 'groups.history';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsInfo.get = function(httpOptions) {
    var url = 'groups.info';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsInvite.post = function(httpOptions) {
    var url = 'groups.invite';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsKick.post = function(httpOptions) {
    var url = 'groups.kick';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsLeave.post = function(httpOptions) {
    var url = 'groups.leave';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsList.get = function(httpOptions) {
    var url = 'groups.list';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsMark.post = function(httpOptions) {
    var url = 'groups.mark';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsOpen.post = function(httpOptions) {
    var url = 'groups.open';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsRename.post = function(httpOptions) {
    var url = 'groups.rename';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsReplies.get = function(httpOptions) {
    var url = 'groups.replies';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsSetPurpose.post = function(httpOptions) {
    var url = 'groups.setPurpose';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsSetTopic.post = function(httpOptions) {
    var url = 'groups.setTopic';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.groupsUnarchive.post = function(httpOptions) {
    var url = 'groups.unarchive';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.imClose.post = function(httpOptions) {
    var url = 'im.close';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.imHistory.get = function(httpOptions) {
    var url = 'im.history';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.imList.get = function(httpOptions) {
    var url = 'im.list';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.imMark.post = function(httpOptions) {
    var url = 'im.mark';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.imOpen.post = function(httpOptions) {
    var url = 'im.open';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.imReplies.get = function(httpOptions) {
    var url = 'im.replies';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.mpimClose.post = function(httpOptions) {
    var url = 'mpim.close';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.mpimHistory.get = function(httpOptions) {
    var url = 'mpim.history';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.mpimList.get = function(httpOptions) {
    var url = 'mpim.list';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.mpimMark.post = function(httpOptions) {
    var url = 'mpim.mark';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.mpimOpen.post = function(httpOptions) {
    var url = 'mpim.open';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.mpimReplies.get = function(httpOptions) {
    var url = 'mpim.replies';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.oauthAccess.post = function(httpOptions) {
    var url = 'oauth.access';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.pinsAdd.post = function(httpOptions) {
    var url = 'pins.add';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.pinsList.get = function(httpOptions) {
    var url = 'pins.list';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.pinsRemove.post = function(httpOptions) {
    var url = 'pins.remove';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.reactionsAdd.post = function(httpOptions) {
    var url = 'reactions.add';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.reactionsGet.get = function(httpOptions) {
    var url = 'reactions.get';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.reactionsList.get = function(httpOptions) {
    var url = 'reactions.list';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.reactionsRemove.post = function(httpOptions) {
    var url = 'reactions.remove';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.remindersAdd.post = function(httpOptions) {
    var url = 'reminders.add';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.remindersComplete.post = function(httpOptions) {
    var url = 'reminders.complete';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.remindersDelete.post = function(httpOptions) {
    var url = 'reminders.delete';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.remindersInfo.get = function(httpOptions) {
    var url = 'reminders.info';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.remindersList.get = function(httpOptions) {
    var url = 'reminders.list';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.rtmStart.get = function(httpOptions) {
    var url = 'rtm.start';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.rtmConnect.get = function(httpOptions) {
    var url = 'rtm.connect';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.searchAll.get = function(httpOptions) {
    var url = 'search.all';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.searchFiles.get = function(httpOptions) {
    var url = 'search.files';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.searchMessages.get = function(httpOptions) {
    var url = 'search.messages';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.starsAdd.post = function(httpOptions) {
    var url = 'stars.add';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.starsList.get = function(httpOptions) {
    var url = 'stars.list';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.starsRemove.post = function(httpOptions) {
    var url = 'stars.remove';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.teamAccessLogs.get = function(httpOptions) {
    var url = 'team.accessLogs';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.teamBillableInfo.get = function(httpOptions) {
    var url = 'team.billableInfo';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.teamInfo.get = function(httpOptions) {
    var url = 'team.info';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.teamIntegrationLogs.get = function(httpOptions) {
    var url = 'team.integrationLogs';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.teamProfileGet.get = function(httpOptions) {
    var url = 'team.profile.get';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usergroupsCreate.post = function(httpOptions) {
    var url = 'usergroups.create';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usergroupsDisable.post = function(httpOptions) {
    var url = 'usergroups.disable';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usergroupsEnable.post = function(httpOptions) {
    var url = 'usergroups.enable';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usergroupsList.get = function(httpOptions) {
    var url = 'usergroups.list';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usergroupsUpdate.post = function(httpOptions) {
    var url = 'usergroups.update';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usergroupsUsersList.get = function(httpOptions) {
    var url = 'usergroups.users.list';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usergroupsUsersUpdate.post = function(httpOptions) {
    var url = 'usergroups.users.update';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usersDeletePhoto.get = function(httpOptions) {
    var url = 'users.deletePhoto';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usersGetPresence.get = function(httpOptions) {
    var url = 'users.getPresence';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usersIdentity.get = function(httpOptions) {
    var url = 'users.identity';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usersInfo.get = function(httpOptions) {
    var url = 'users.info';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usersList.get = function(httpOptions) {
    var url = 'users.list';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usersLookupByEmail.get = function(httpOptions) {
    var url = 'users.lookupByEmail';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usersSetActive.post = function(httpOptions) {
    var url = 'users.setActive';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usersSetPhoto.post = function(httpOptions) {
    var url = 'users.setPhoto';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usersSetPresence.post = function(httpOptions) {
    var url = 'users.setPresence';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usersProfileGet.get = function(httpOptions) {
    var url = 'users.profile.get';
    sys.logs.debug('[slack] GET from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.usersProfileSet.post = function(httpOptions) {
    var url = 'users.profile.set';
    sys.logs.debug('[slack] POST from: ' + url);
    return slackFunction(url, httpOptions);
};

endpoint.utils = {};

endpoint.utils.parseTimestamp = function(dateString) {
    if (!dateString) {
        return null;
    }
    var dt = dateString.split(/[: T\-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
};

endpoint.utils.formatTimestamp = function(date) {
    if (!date) {
        return null;
    }
    var pad = function(number) {
        var r = String(number);
        if ( r.length === 1 ) {
            r = '0' + r;
        }
        return r;
    };
    return date.getUTCFullYear()
        + '-' + pad( date.getUTCMonth() + 1 )
        + '-' + pad( date.getUTCDate() )
        + 'T' + pad( date.getUTCHours() )
        + ':' + pad( date.getUTCMinutes() )
        + ':' + pad( date.getUTCSeconds() )
        + '.' + String( (date.getUTCMilliseconds()/1000).toFixed(3) ).slice( 2, 5 )
        + 'Z';
};

///////////////////////
//  Private helpers  //
///////////////////////

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);

var parse = function (str) {
    try {
        if (arguments.length > 1) {
            var args = arguments[1], i = 0;
            return str.replace(/(:(?:\w|-)+)/g, () => {
                if (typeof (args[i]) != 'string') throw new Error('Invalid type of argument: [' + args[i] + '] for url [' + str + '].');
                return args[i++];
            });
        } else {
            if (str) {
                return str;
            }
            throw new Error('No arguments nor url were received when calling the helper. Please check it\'s definition.');
        }
    } catch (err) {
        sys.logs.error('Some unexpected error happened during the parse of the url for this helper.')
        throw err;
    }
}

