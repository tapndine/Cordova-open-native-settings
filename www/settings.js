var exec = require("cordova/exec");

function NativeSettings() {
}

GpsEnable.prototype.open = function(onsucess, onfail) {
	exec(onsucess, onfail, "NativeSettings", "open", []);
};

var NativeSettings = new NativeSettings();
module.exports = NativeSettings;