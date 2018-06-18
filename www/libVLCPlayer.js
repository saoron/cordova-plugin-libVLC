var exec = require("cordova/exec");
var libVLCPlayer = {};

libVLCPlayer.play = function(uri, success, failure) {
  // fire
  exec(success, failure, "VideoPlayerVLC", "play", [
    uri,
    {
      autoPlay: false,
      hideControls: false
    }
  ]);
};

libVLCPlayer.stop = function(success, failure) {
  success = success ? success : function() {};
  failure = failure ? failure : function() {};

  // fire
  exec(success, failure, "VideoPlayerVLC", "stop", []);
};

module.exports = libVLCPlayer;
