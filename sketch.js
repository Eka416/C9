var box
function setup() {
  createCanvas(400,400);
  box = createSprite(350,50,50,50)
}

function draw() 
{
  background(0,200,200);
  drawSprites()
  if (keyIsDown(RIGHT_ARROW)) {
    box.x = box.x + 5
  }
  if (keyIsDown(LEFT_ARROW)) {
    box.x = box.x - 5
}
if (keyIsDown(UP_ARROW)) {
  box.y = box.y - 5
}
if (keyIsDown(DOWN_ARROW)) {
  box.y = box.y + 5
}
}



