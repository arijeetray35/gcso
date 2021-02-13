var wall,thickness ; 
var bullet,speed,weight ; 

function setup() {
 var canvas =  createCanvas(1600,400);
 

  thickness=random(22,83);
  speed=random(55,90);
  weight=random(400,1500);

  bullet =  createSprite(50,200,50,50);

 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color (80,80,80);
}


function draw() {
  background(100);  

  bullet.velocityX = speed ; 

  if(wall.x - bullet.x < wall.width/2 + bullet.width/2) {
    bullet.velocityX = 0 ;
      var deformation = 0.5*weight*speed*speed /22500 ; 
      if(deformation > 180 )
      {
        bullet.shapeColor = color(255,0,0);
      }
      if(deformation < 180 && deformation  > 100 ) 
      {
        bullet.shapeColor = color(230,230,0);
      }
      if(deformation < 100 ) 
      {
        bullet.shapeColor = color(0,255,0);
      }
    } 
  drawSprites();
} 
