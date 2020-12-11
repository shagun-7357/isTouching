var fixedRect, movingRect;
var obj1, obj2, obj3, obj4;

function setup() {
  createCanvas(1200,800);
  obj1 = createSprite(100,300,40,50);
  obj1.shapeColor = "green";
  obj1.debug = true;
  obj2 = createSprite(200,500,30,60);
  obj2.shapeColor = "green";
  obj2.debug = true;
  obj3 = createSprite(500,400,20,80);
  obj3.shapeColor = "green";
  obj3.debug = true;
  obj4 = createSprite(300,600,50,70);
  obj4.shapeColor = "green";
  obj4.debug = true;
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
fill("red");
textSize(24)
if(isTouching(obj1)|| isTouching(obj2)||isTouching(obj3)||isTouching(obj4)||isTouching(fixedRect)){
  text("1 object is touching",500,400);
}
else{
  text("object is not touching",500,400);
}
  drawSprites();
}
