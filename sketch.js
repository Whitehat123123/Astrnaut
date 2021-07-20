var astrounaut,bath,brush,drink,gym,eat,sleep,bg,bgImg,move



function preload(){
  bath=loadAnimation("Images/bath1.png","Images/bath2.png")
  brush=loadAnimation("Images/brush.png")
  drink=loadAnimation("Images/drink1.png","Images/drink2.png")
  eat=loadAnimation("Images/eat1.png","Images/eat2.png")
  gym=loadAnimation("Images/gym1.png","Images/gym2.png","Images/gym11.png","Images/gym12.png")
  sleep=loadAnimation("Images/sleep.png")
  bgImg=loadImage("Images/iss.png")
  move=loadAnimation("Images/move.png","Images/move1.png")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg=createSprite(windowWidth/2, windowHeight/2);
  bg.addImage(bgImg)
  bg.scale=0.3
  astronaut=createSprite(windowWidth/2,windowHeight/2,50,50)
  astronaut.addAnimation("bathing",bath)
  astronaut.addAnimation("brushing",brush)
  astronaut.addAnimation("drinking",drink)
  astronaut.addAnimation("eating",eat)
  astronaut.addAnimation("gyming",gym)
  astronaut.addAnimation("sleeping",sleep)
  astronaut.addAnimation("moving",move)
  astronaut.scale=0.1
}

function draw() {
  background(255,255,255); 

  drawSprites();
  if(keyDown(DOWN_ARROW)){
    astronaut.changeAnimation("gyming",gym)
  }
  if(keyDown(LEFT_ARROW)){
    astronaut.changeAnimation("bathing",bath)

}
if(keyDown(UP_ARROW)){
  astronaut.changeAnimation("drinking",drink)
}
if(keyDown(RIGHT_ARROW)){
  astronaut.changeAnimation("eating",eat)
}
if(keyDown("M")){
  astronaut.changeAnimation("moving",move)
  astronaut.velocityX=0.1
}
if(keyDown("B")){
  astronaut.changeAnimation("brushing",brush)
}
if(keyDown("S")){
  astronaut.changeAnimation("sleeping",sleep)
}
 
}