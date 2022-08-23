left_wristX=0;
right_wristX=0;
difference=0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas= createCanvas(550,550);
    canvas.position(600,150);
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on("pose",gotPoses);
}


function modelloaded(){
    console.log("PoseNet initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        left_wristX = results[0].pose.leftWrist.x;
        right_wristX = results[0].pose.rightWrist.x;
        console.log("leftwrist_X="+left_wristX)
        difference = floor(left_wristX - right_wristX);
        console.log("left_wristX="+left_wristX+"right_wristX="+right_wristX+"difference="+difference);
    }
}
function draw(){
    background('#6C91C2');
    textSize(10);
    fill("white");
    textSize(difference);
    text('Rithik', 50, 400);
    document.getElementById("font").innerHTML="Size of the font = "+difference+"px";
}