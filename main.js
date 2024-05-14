

wrist_right_x=0;
wrist_left_x=0;

diff=0;

function setup(){
    canvas=createCanvas(500,500);
    canvas.position(550,125);

    video=createCapture(VIDEO);
    video.size(500,500);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}

function draw() {
background("grey");

canvas.fillText("Hello World",200,200);

document.getElementById("hello").innerHTML="The width and height of the font is="+diff;
}

function modelLoaded(){
    console.log("ITS WORKING, YAY!!!!!!!!!!!");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        wrist_left_x=results[0].pose.leftWrist.x;
        wrist_right_x=results[0].pose.rightWrist.x;

        diff=floor(wrist_left_x-wrist_right_x);

        console.log("left wrist x="+wrist_left_x+" ,right wrist x="+wrist_right_x+" ,diff="+diff);


    }
}