// Set constraints for the video stream
var constraints = { video: { facingMode: "user" }, audio: false };
var track = null;

// Define constants
const cameraView = document.querySelector("#camera--view"),
    cameraOutput = document.querySelector("#camera--output"),
    cameraSensor = document.querySelector("#camera--sensor"),
    cameraTrigger = document.querySelector("#camera--trigger"),

    cameraIcon = document.querySelector("#camera--icon"),
    camera = document.querySelector("#camera"),
    sticker = document.querySelector("#Sticker");

var width, height;
var stage, container;
//var camera_open;

function init() {
    width = window.innerWidth;
    height = window.innerHeight;

    /*camera_open = document.getElementById('center--camera_open');
    camera_open.addEventListener('click', OpenCamera);

    var canvas = document.getElementById("stage");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    
    container.visible = false;
    stage.addChild(container);    
    container.addChild(sticker = new Sticker(stage));
    sticker.start();

    createjs.Ticker.addEventListener("tick", tickHandler);*/

    //cameraOpen.addEventListener("click", click);

    //dragElement(document.getElementById("CameraIcon"));

   // stage = new createjs.Stage("stage");
   // container = new createjs.Container();
} 

function handleStart(event) {
    //console.log("Start");
}

function handleEnd(event) {
    //console.log("End");
}

function handleMove(event) {
    //event.preventDefault();
    var touches = event.changedTouches;
    if(touches[0].clientX >= 0 && touches[0].clientX <= width){
        sticker.style.left = touches[0].clientX - 120;
    }
    
    if(touches[0].clientY >= 0 && touches[0].clientY <= height){
        sticker.style.top = touches[0].clientY - 120;
    }
}

cameraIcon.onclick = function(){
    console.log("Camera Open");
    cameraIcon.style.visibility = "hidden";
    camera.style.visibility = "visible";

    sticker.addEventListener("touchstart", handleStart, false);
    sticker.addEventListener("touchend", handleEnd, false);
    sticker.addEventListener("touchmove", handleMove, false);
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
}

cameraTrigger.onclick = function() {

    /*console.log(cameraSensor.width, cameraSensor.height);
    cameraSensor.width = cameraView.videoWidth;
    cameraSensor.height = cameraView.videoHeight;

    console.log(cameraSensor.width, cameraSensor.height);
    cameraSensor.getContext("2d").drawImage(cameraView, 0, 0);    
    //cameraOutput.src = cameraSensor.toDataURL("image/webp");
    //cameraSensor.getContext("2d").drawImage(sticker, 0, 0);

    //cameraSensor.getContext("2d").drawImage(sticker, 0, 0,100, 100, sticker.style.left, sticker.style.top, 100, 100);
    //cameraSensor.getContext("2d").drawImage(sticker, 0, 0);

    /*var c = document.getElementById("camera--sensor");
    var ctx = c.getContext("2d");
    //ctx.drawImage(cameraView, 0, 0);

    var img = document.getElementById("Sticker");
    console.log(sticker.style.left, sticker.style.top);
    ctx.drawImage(img, 100, 100, 240, 240);
    //ctx.drawImage(img, sticker.style.left, sticker.style.top, 50, 50);
    //cameraOutput.src = cameraSensor.toDataURL("image/webp");


    //cameraOutput.classList.add("taken");
    // track.stop();*/
};

/*function tickHandler(e){
    //stage.update();
}*/

// Start the video stream when the window loads
window.addEventListener("load", init, false);