const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,backgroundimg,man,manimg;

var  manAnima,zombie,zombieImg1,ZombieG,manMove,bullet,bulletImg,bulletGroup;



function preload() {
    backgroundimg=loadImage("images/background.png");
    manAn=loadAnimation("images/man.png");
 manAnima=loadAnimation("images/man1.png","images/man3.png")
 zombieImg1=loadAnimation("images/zombie1.png.png","images/zombie4.png.png","images/zombie8.png.png");
 bulletImg=loadImage("images/bullet.png.png");
 manMove=loadAnimation("images/man1.png","images/man11.png","images/man21.png");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight-200);
    man=createSprite(displayWidth-100,displayHeight-300,10,30);
     man.addAnimation("man",manAn)

     bullet=createSprite(man.x-40,man.y+15)
        bullet.addImage(bulletImg);
        bullet.scale=0.15
        bullet.visible=false;
        
     zombieG=new Group ()
   bulletGroup=new Group()
   bulletGroup.add(bullet);
   //bullet.debug();
}

function draw(){
    background(backgroundimg);
  

    if(bulletGroup.isTouching(zombieG)){
        destroyZombie();
    }

   
    zombieMoving();
     
    zombieSpawn();

    drawSprites();

   
}

function zombieSpawn(){
    if(frameCount%120===0){
        zombie=createSprite(random(0,400),random(400,height-70),20,20);
        zombie.addAnimation("zombie",zombieImg1);
        zombie.scale=0.6
        zombie.velocityX=3;
        zombieG.add(zombie)

        }



}

function zombieMoving(){
    //bullet.x = man.x;
   // bullet.y = man.y;

    if(keyWentDown("space")){
        man.addAnimation("man",manAnima)
        bullet.visible=true;
        bullet.velocityX=-9
    }
    if(keyWentUp("space")){
        man.addAnimation("man",manAn)
        bulletGroup.remove(bullet);
    }
    if(keyWentDown(UP_ARROW)){
        man.addAnimation("man",manMove)   
           man.velocityY=-2;
           bulletGroup.x=man.x;
           bulletGroup.y=man.y;
       }
       if(keyWentUp(UP_ARROW)){
           man.addAnimation("man",manAn); 
              man.velocityY=0;
              bulletGroup.x=man.x;
           bulletGroup.y=man.y;
          }
    if(keyWentDown(DOWN_ARROW)){
        man.addAnimation("man",manMove)   
           man.velocityY=2;
           bullet.x=man.x;
           bullet.y=man.y;
       }
       if(keyWentUp(DOWN_ARROW)){
           man.addAnimation("man",manAn); 
              man.velocityY=0;
              bullet.x=man.x;
           bullet.y=man.y;
          }

          if(keyWentDown(LEFT_ARROW)){
            man.addAnimation("man",manMove)   
               man.velocityX=-2;
               bullet.x=man.x;
           bullet.y=man.y;
           }
           if(keyWentUp(LEFT_ARROW)){
               man.addAnimation("man",manAn); 
                  man.velocityX=0;
                  bullet.x=man.x;
           bullet.y=man.y;
              }
       
              if(keyWentDown(RIGHT_ARROW)){
               man.addAnimation("man",manMove)   
                  man.velocityX=2;
                  bullet.x=man.x;
           bullet.y=man.y;
              }
              if(keyWentUp(RIGHT_ARROW)){
                  man.addAnimation("man",manAn); 
                     man.velocityX=0;
                     bullet.x=man.x;
           bullet.y=man.y;
                 }

}

function destroyZombie (){
    zombieG.destroy();


}