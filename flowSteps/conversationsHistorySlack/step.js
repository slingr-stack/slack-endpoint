/**
 * This flow step will send generic request.
 *
 * @param {object} inputs
 */
step.conversationsHistorySlack = function (inputs) {

  var inputsLogic = {
    channel: inputs.channel || ""
  };

  var body  = {
    channel: inputsLogic.channel
  }

  return slackFunction('conversations.history', body)
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
