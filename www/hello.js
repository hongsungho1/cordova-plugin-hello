/*global cordova, module*/

module.exports = {
    greet: function (name, successCallback, errorCallback, zzz) {
        cordova.exec(successCallback, errorCallback, zzz, "Hello", "greet", [name]);
    }
};
