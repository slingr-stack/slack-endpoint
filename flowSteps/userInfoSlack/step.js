/**
 * This flow step will send generic request.
 *
 * @param {object} inputs
 */
step.userInfoSlack = function (inputs) {

  var inputsLogic = {
    userId: inputs.userId || ""
  };

  var body  = {
    user: inputsLogic.userId
  }

  return slackFunction('users.info', body)
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
