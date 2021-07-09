img="";
status="";
function preload(){
img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(500,350);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelLoaded(){
    console.log("CocoSSD is initialized");
    status=true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
console.error(error);
    }
    else{
console.log(results);
    }
}
function draw(){
    image(img,0,0,500,350);
    fill("#FF0000");
    text("Dog",40,75);
    noFill();
    stroke("#FF0000");
    rect(10,60,380,300);
    fill('#FF0000');
    text("Cat",250,75);
    noFill();
    stroke('#FF0000');
    rect(240,60,230,270);
}