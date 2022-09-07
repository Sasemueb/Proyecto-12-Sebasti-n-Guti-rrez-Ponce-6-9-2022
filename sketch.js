var leftBoundary,rightBoundary;
var path;
var pathImg;
var boy,boy_running;

function preload(){
  pathImg = loadImage("path.png");
  boy_running = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.png","jake5.png");
  //loadImage de path (camino)
  //loadAnimation de boy (niño)


}

function setup(){
  
  createCanvas(400,400);

  path = createSprite(200,200,20,40);
  path.addImage(pathImg);
  path.velocityY-5 
  
path.scale=1.2;
 //crear sprite de path (camino) 
//agregar imagen de path
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y

boy = createSprite(50,170,20,40);
boy.addAnimation("running", boy_running);
boy.scale=0.8;
//crear sprite de boy (niño)
//agregar animación para boy
  
// crear  left Boundary (límite izquierdo)
leftBoundary = createSprite(0,0,50,400);
leftBoundary.visible=false

////establecer visibilidad como false (falso) para límite izquierdo
rightBoundary = createSprite(410,0,50,400);
rightBoundary.visible=false

//crear right Boundary (límite derecho)

//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocityY = 4;

  boy.x=World.mouseX;

  
  // boy moviéndose en el eje X con el mouse
  
  edges= createEdgeSprites();

  
  boy.collide(rightBoundary);
  boy.collide(leftBoundary);

  // colisión de boy con los límites derecho e izquierdo invisibles 
  
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2
  }
  
  drawSprites();
}
