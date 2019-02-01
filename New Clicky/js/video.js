


var video = document.getElementById("myVideo");
var btn = document.getElementById("myBtn");



$(document).on("click", "#myBtn", function () {
    console.log("test click" + btn);
    myFunction();
    
});

function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
}

var video2 = document.getElementById("myVideo2");
var btn2 = document.getElementById("myBtn2");

function myFunction2() {
    if (video2.paused) {
        video2.play();
        btn2.innerHTML = "Pause";
    } else {
        video2.pause();
        btn2.innerHTML = "Play";
    }
}

var video3 = document.getElementById("myVideo3");
var btn3 = document.getElementById("myBtn3");

function myFunction3() {
    if (video3.paused) {
        video3.play();
        btn3.innerHTML = "Pause";
    } else {
        video3.pause();
        btn3.innerHTML = "Play";
    }
}