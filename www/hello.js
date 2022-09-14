/*global cordova, module*/

module.exports = {
    greet: function (name, successCallback, errorCallback, zzzCallback) {
        cordova.exec(successCallback, errorCallback, zzzCallback, "Hello", "greet", [name]);
    }
};
