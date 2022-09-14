/*global cordova, module*/

module.exports = {
    greet: function (name, successCallback, errorCallback, failureCallback) {
        cordova.exec(successCallback, errorCallback, failureCallback, "Hello", "greet", [name]);
    }
};
