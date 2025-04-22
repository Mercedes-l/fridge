let shapeX=0
let shapeY=800
let fridgeDoor
let fridgeRedOne
let fridgeRedTwo
let kale
let milk
let wkd
let strawberries
let milkFrameTwo
let milkFrameThree






function preload (){
  fridgeDoor = loadImage("fridgeRedOne.png")
  fridgeRedOne= loadImage("fridgeRedOne.png")
  fridgeRedTwo = loadImage("fridgeRedTwo.png")
  milk = loadImage("milk.png")
  kale = loadImage ("kale.png")
  wkd = loadImage ("wkd.png")
  strawberries = loadImage ("strawberries.png")
  milkFrameTwo = loadImage ("fridgeAnimation/milkFrameTwo.png")
  milkFrameThree = loadImage ("fridgeAnimation/milkFrameThree.png")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 0);
  fill(171, 244, 245)
  stroke(0,0 ,0)
  imageMode(CENTER)
  image (fridgeDoor, 200, windowHeight/2, 300, 600)
  image (fridgeRedOne, 650, windowHeight/2, 300, 600)
  image (fridgeRedTwo, 950, windowHeight/2, 300, 600)
  
  image (kale, 880, windowHeight*0.6, 117, 125)
  image (wkd, 940, windowHeight*0.175, 200, 182)
  image (strawberries, 700, windowHeight*0.58, 200, 100)

  image (milk, 980, windowHeight*0.62, 117, 149)

  textSize(60);
  fill(255);
  stroke(0);
  strokeWeight(4);
  text('eat up!!', 100, 120)
  
  
}

function draw() {
  

  
    if(mouseIsPressed){
      fill(0,0,0)
   // ellipse(mouseX,mouseY,100);
   ellipse(random(windowWidth),random(windowHeight),100);
    }}
