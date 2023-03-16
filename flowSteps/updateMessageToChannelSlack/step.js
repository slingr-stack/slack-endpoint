/**
 * This flow step will send generic request.
 *
 * @param {object} inputs
 */
step.updateMessageToChannelSlack = function (inputs) {

  var inputsLogic = {
    channel: inputs.channel || "",
    messageId: inputs.messageId || "",
    message: inputs.message || ""
  };

  var body  = {
    channel: inputsLogic.channel,
    ts: inputsLogic.messageId,
    text: inputsLogic.message
  }

  return slackFunction('chat.update', body)
}


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
