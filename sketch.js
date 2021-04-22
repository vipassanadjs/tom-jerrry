var bgImg,backGround
var cat
var mouse
var catImg1,catImg2,catImg3
var mouseImg1,mouseImg2,mouseImg3

function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    mouseImg1 = loadAnimation("images/mouse1.png")
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImg3 = loadImage("images/mouse4.png")
    catImg1 = loadAnimation("images/cat1.png")
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png")
    catImg3 = loadImage("images/cat4.png")
}

function setup(){
    createCanvas(2000,2000);
    backGround=createSprite(200,200,2000,2000)
    backGround.addAnimation("backgroud1",bgImg);
    
    //create tom and jerry sprites here
   cat = createSprite(590,400,60,60);
   cat.addAnimation("catImage",catImg1);
   //cat.velocityX=-2
   cat.scale=0.1

   mouse = createSprite(190,400,60,60);
   mouse.addAnimation("mouseImg",mouseImg1);
   mouse.scale=0.1
  
  // background = createSprite("100")
}

function draw() {

   // background("white");
    //Write condition here to evalute if tom and jerry collide
   if(cat.x-mouse.x < (mouse.width/2+ cat.width/2 )){
     mouse.addAnimation("MOUSE",mouseImg3)
     mouse.changeAnimation("MOUSE")
     cat.addAnimation("Cat",catImg3)
     cat.changeAnimation("Cat")
     cat.velocityX=0
     cat.velocityY=0
   }
   cat.setCollider("circle",0,0,400,)
   cat.debug = true
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseImg2);
    mouse.changeAnimation("mouseTeasing")
    mouse.scale=0.1
    mouse.frameDelay = 25

    cat.addAnimation("catWalking",catImg2);
    cat.changeAnimation("catWalking")
    cat.scale=0.1
    cat.velocityX=2
    cat.frameDelay = 25 
   
    }

  if(keyCode===LEFT_ARROW){
  mouse.addAnimation("mouseTeasing",mouseImg2);
  mouse.changeAnimation("mouseTeasing")
  mouse.scale=0.1
  mouse.frameDelay = 25 

  cat.addAnimation("catWalking",catImg2);
  cat.changeAnimation("catWalking")
  cat.velocityX=-2
  cat.scale=0.1
  cat.frameDelay = 25 
 
  }

}
