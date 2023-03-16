# Javascript API

The Javascript API of the slack endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `POST`,`GET` requests to the [slack API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.slack.post('/conversations.leave', body)
var response = app.endpoints.slack.post('/conversations.leave')
var response = app.endpoints.slack.get('/admin.emoji.list')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/api.test'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.apiTest.post(body)
```
---
* API URL: '/auth.test'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.authTest.post(body)
```
---
* API URL: '/chat.delete'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.chatDelete.post(body)
```
---
* API URL: '/chat.meMessage'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.chatMeMessage.post(body)
```
---
* API URL: '/chat.postMessage'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.chatPostMessage.post(body)
```
---
* API URL: '/chat.unfurl'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.chatUnfurl.post(body)
```
---
* API URL: '/chat.update'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.chatUpdate.post(body)
```
---
* API URL: '/conversations.archive'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.conversationsArchive.post(body)
```
---
* API URL: '/conversations.close'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.conversationsClose.post(body)
```
---
* API URL: '/conversations.create'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.conversationsCreate.post(body)
```
---
* API URL: '/conversations.invite'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.conversationsInvite.post(body)
```
---
* API URL: '/conversations.join'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.conversationsJoin.post(body)
```
---
* API URL: '/conversations.kick'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.conversationsKick.post(body)
```
---
* API URL: '/conversations.leave'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.conversationsLeave.post(body)
```
---
* API URL: '/conversations.open'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.conversationsOpen.post(body)
```
---
* API URL: '/conversations.rename'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.conversationsRename.post(body)
```
---
* API URL: '/conversations.setPurpose'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.conversationsSetPurpose.post(body)
```
---
* API URL: '/conversations.setTopic'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.conversationsSetTopic.post(body)
```
---
* API URL: '/conversations.unarchive'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.conversationsUnarchive.post(body)
```
---
* API URL: '/dialog.open'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.dialogOpen.post(body)
```
---
* API URL: '/views.open'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.viewsOpen.post(body)
```
---
* API URL: '/views.update'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.viewsUpdate.post(body)
```
---
* API URL: '/views.publish'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.viewsPublish.post(body)
```
---
* API URL: '/views.push'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.viewsPush.post(body)
```
---
* API URL: '/dnd.endDnd'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.dndEndDnd.post(body)
```
---
* API URL: '/dnd.endSnooze'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.dndEndSnooze.post(body)
```
---
* API URL: '/files.comments.delete'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.filesCommentsDelete.post(body)
```
---
* API URL: '/files.delete'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.filesDelete.post(body)
```
---
* API URL: '/files.revokePublicURL'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.filesRevokePublicURL.post(body)
```
---
* API URL: '/files.sharedPublicURL'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.filesSharedPublicURL.post(body)
```
---
* API URL: '/files.upload'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.filesUpload.post(body)
```
---
* API URL: '/oauth.access'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.oauthAccess.post(body)
```
---
* API URL: '/pins.add'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.pinsAdd.post(body)
```
---
* API URL: '/pins.remove'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.pinsRemove.post(body)
```
---
* API URL: '/reactions.add'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.reactionsAdd.post(body)
```
---
* API URL: '/reactions.remove'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.reactionsRemove.post(body)
```
---
* API URL: '/reminders.add'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.remindersAdd.post(body)
```
---
* API URL: '/reminders.complete'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.remindersComplete.post(body)
```
---
* API URL: '/reminders.delete'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.remindersDelete.post(body)
```
---
* API URL: '/stars.add'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.starsAdd.post(body)
```
---
* API URL: '/stars.remove'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.starsRemove.post(body)
```
---
* API URL: '/usergroups.create'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.usergroupsCreate.post(body)
```
---
* API URL: '/usergroups.disable'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.usergroupsDisable.post(body)
```
---
* API URL: '/usergroups.enable'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.usergroupsEnable.post(body)
```
---
* API URL: '/usergroups.update'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.usergroupsUpdate.post(body)
```
---
* API URL: '/usergroups.users.update'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.usergroupsUsersUpdate.post(body)
```
---
* API URL: '/users.setActive'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.usersSetActive.post(body)
```
---
* API URL: '/users.setPhoto'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.usersSetPhoto.post(body)
```
---
* API URL: '/users.setPresence'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.usersSetPresence.post(body)
```
---
* API URL: '/users.profile.set'
* HTTP Method: 'POST'
```javascript
app.endpoints.slack.usersProfileSet.post(body)
```
---
* API URL: '/auth.revoke'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.authRevoke.get()
```
---
* API URL: '/bots.info'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.botsInfo.get()
```
---
* API URL: '/conversations.history'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.conversationsHistory.get()
```
---
* API URL: '/conversations.info'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.conversationsInfo.get()
```
---
* API URL: '/conversations.list'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.conversationsList.get()
```
---
* API URL: '/conversations.members'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.conversationsMembers.get()
```
---
* API URL: '/conversations.replies'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.conversationsReplies.get()
```
---
* API URL: '/dnd.info'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.dndInfo.get()
```
---
* API URL: '/dnd.setSnooze'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.dndSetSnooze.get()
```
---
* API URL: '/dnd.teamInfo'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.dndTeamInfo.get()
```
---
* API URL: '/admin.emoji.list'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.adminEmojiList.get()
```
---
* API URL: '/files.info'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.filesInfo.get()
```
---
* API URL: '/files.list'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.filesList.get()
```
---
* API URL: '/pins.list'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.pinsList.get()
```
---
* API URL: '/reactions.get'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.reactionsGet.get()
```
---
* API URL: '/reactions.list'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.reactionsList.get()
```
---
* API URL: '/reminders.info'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.remindersInfo.get()
```
---
* API URL: '/reminders.list'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.remindersList.get()
```
---
* API URL: '/rtm.start'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.rtmStart.get()
```
---
* API URL: '/rtm.connect'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.rtmConnect.get()
```
---
* API URL: '/search.all'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.searchAll.get()
```
---
* API URL: '/search.files'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.searchFiles.get()
```
---
* API URL: '/search.messages'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.searchMessages.get()
```
---
* API URL: '/stars.list'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.starsList.get()
```
---
* API URL: '/team.accessLogs'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.teamAccessLogs.get()
```
---
* API URL: '/team.billableInfo'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.teamBillableInfo.get()
```
---
* API URL: '/team.info'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.teamInfo.get()
```
---
* API URL: '/team.integrationLogs'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.teamIntegrationLogs.get()
```
---
* API URL: '/team.profile.get'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.teamProfileGet.get()
```
---
* API URL: '/usergroups.list'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.usergroupsList.get()
```
---
* API URL: '/usergroups.users.list'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.usergroupsUsersList.get()
```
---
* API URL: '/users.deletePhoto'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.usersDeletePhoto.get()
```
---
* API URL: '/users.getPresence'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.usersGetPresence.get()
```
---
* API URL: '/users.identity'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.usersIdentity.get()
```
---
* API URL: '/users.info'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.usersInfo.get()
```
---
* API URL: '/users.list'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.usersList.get()
```
---
* API URL: '/users.lookupByEmail'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.usersLookupByEmail.get()
```
---
* API URL: '/users.profile.get'
* HTTP Method: 'GET'
```javascript
app.endpoints.slack.usersProfileGet.get()
```
---

</details>
    
## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint: 
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>POST,GET</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/api.test<br>/auth.test<br>/chat.delete<br>/chat.meMessage<br>/chat.postMessage<br>/chat.unfurl<br>/chat.update<br>/conversations.archive<br>/conversations.close<br>/conversations.create<br>/conversations.invite<br>/conversations.join<br>/conversations.kick<br>/conversations.leave<br>/conversations.open<br>/conversations.rename<br>/conversations.setPurpose<br>/conversations.setTopic<br>/conversations.unarchive<br>/dialog.open<br>/views.open<br>/views.update<br>/views.publish<br>/views.push<br>/dnd.endDnd<br>/dnd.endSnooze<br>/files.comments.delete<br>/files.delete<br>/files.revokePublicURL<br>/files.sharedPublicURL<br>/files.upload<br>/oauth.access<br>/pins.add<br>/pins.remove<br>/reactions.add<br>/reactions.remove<br>/reminders.add<br>/reminders.complete<br>/reminders.delete<br>/stars.add<br>/stars.remove<br>/usergroups.create<br>/usergroups.disable<br>/usergroups.enable<br>/usergroups.update<br>/usergroups.users.update<br>/users.setActive<br>/users.setPhoto<br>/users.setPresence<br>/users.profile.set<br>/auth.revoke<br>/bots.info<br>/conversations.history<br>/conversations.info<br>/conversations.list<br>/conversations.members<br>/conversations.replies<br>/dnd.info<br>/dnd.setSnooze<br>/dnd.teamInfo<br>/admin.emoji.list<br>/files.info<br>/files.list<br>/pins.list<br>/reactions.get<br>/reactions.list<br>/reminders.info<br>/reminders.list<br>/rtm.start<br>/rtm.connect<br>/search.all<br>/search.files<br>/search.messages<br>/stars.list<br>/team.accessLogs<br>/team.billableInfo<br>/team.info<br>/team.integrationLogs<br>/team.profile.get<br>/usergroups.list<br>/usergroups.users.list<br>/users.deletePhoto<br>/users.getPresence<br>/users.identity<br>/users.info<br>/users.list<br>/users.lookupByEmail<br>/users.profile.get<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Event</td>
        <td>dropDown</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used to define event after the call. <br>
            Possible values are: <br>
            File Downloaded, Callback
        </td>
    </tr>
    <tr>
        <td>Callback data</td>
        <td>textarea</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is an object you can send that you will get back when the function is processed.
        </td>
    </tr>
    <tr>
        <td>Callbacks</td>
        <td>Script</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is a map where you can listen for different function
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*