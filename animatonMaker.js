const remote = require("electron").remote;
const app = remote.app;

const animator = require("./animationUtilities");

var childProcess = require("child_process");
var path = require("path");
let python = childProcess.spawn("python3", [
  "-u",
  path.join(app.getAppPath(), "", "./FFT.py")
]);

python.stdout.on("data", function(data) {
  console.log(data);
  animator.createFrequencyElements(data.length);

  for (let i = 0; i < data.length; i++) {
    animator.animateOnFrequency(data[i], "Frequency" + i);
  }
});
