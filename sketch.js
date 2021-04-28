var a
var b

function setup() {
  createCanvas(800,400);
  a=createSprite(100, 200, 50, 50);
  a.shapeColor="purple"
  b=createSprite(500, 200, 100, 110);
  b.shapeColor="purple"

}

function draw() {
  background("lightBlue");  
  drawSprites();

  if(b.x-a.x<a.width/2+b.width/2&&a.x-b.x<a.width/2+b.width/2&&b.y-a.y<a.height/2+b.height/2&&a.y-b.y<a.height/2+b.height/2){
    a.shapeColor="red"
    b.shapeColor="red"
  }
  else{
    a.shapeColor="purple"
    b.shapeColor="purple"
  }

  b.x=mouseX
  b.y=mouseY
  console.log(b.x-a.x)
}