/**
 * This flow step will send generic request.
 *
 * @param {object} inputs
 */
step.sendMessageToChannelSlack = function (inputs) {

  var inputsLogic = {
    channel: inputs.channel || "",
    message: inputs.message || ""
  };

  var body  = {
    channel: inputsLogic.channel,
    text: inputsLogic.message
  }

  return slackFunction('chat.postMessage', body)
}
