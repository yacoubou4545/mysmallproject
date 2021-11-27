// var controls = function (el) {
//     var audioControls = el,
//     playButton = document.getElementById("play")
//     stopButton = document.getElementById("stop");
//     // set up event listeners like normal
//     playButton.addEventListener("click", play, false);
//     stopButton.addEventListener("click", stop, false);
//     function play() {
//     // accessing parent function variable - this is closure
//     audioControls.setAttribute("class", "playing");
//     }
//     function stop() {
//     // accessing parent function variable
//     audioControls.setAttribute("class", "stopped");

// }
// // set up a natural API to return
// return play, stop;
// };
// (function () {
// var element = document.getElementById("controls"),
// action = controls(element);
// // Use the API
// action.play;
// action.stop;
// })(); 
