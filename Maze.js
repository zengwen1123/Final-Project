var speed;
var x;
var y;
var R;
var G;
var o;

function setup() {
  createCanvas(560, 420);
  speed = 6;
  x = 0;
  y = 190;
  R = 0;
  G = 150;
  o = 255;

}

function draw() {
  background(148,43,226);



  fill(255, 0, 0);

  rect(x, y, 20, 20);

  noStroke();
  fill(0, o);
  //outer
  ////////////////////以下为阻挡物，当碰到阻挡物  自动变换运动
  
  rect(420,160,20,60);//A1a
  if(x>=400 && x<=440 && y>=140 && y<=220){
    if(x <= 420){
    x = x - speed;
    y = y + speed;
    }
   
 }
  rect(400,220,20+random(10),120+random(10));//A1b
   if(x>=380 && x<=420 && y>=200 && y<=340){
    if(x <= 400){
    x = x - speed;
    y = y + speed;
    }
    if(x >= 400){
    x = x + speed;
    y = y - speed;
    }    
 }
  rect(460,160,20,60);//A2a
    if(x>=440 && x<=480 && y>=140 && y<=220){
    if(x <= 460){
    x = x - speed;
    y = y - speed;
    }
    if(x >= 460){
    x = x + speed;
    y = y - speed;
    } 
  }
    rect(480,220,20+random(10),120+random(10));//A2b
    if(x>=460 && x<=500 && y>=200 && y<=340){
    if(x <= 480){
    x = x - speed;
    y = y - speed;
    }
    if(x >= 480){
    x = x + speed;
    y = y - speed;
    } 
  }
   rect(400,220,100,20);//A3
    if(x>=380 && x<=500 && y>=200 && y<=240){
    if(y <= 220){
    x = x + speed;
    y = y - speed;
    }
    if(y >= 220){
    x = x - speed;
    y = y + speed;
    }    
 }
 
 rect(500,100,40+random(10),20+random(10));
    if(x>=480 && x<=540 && y>=80 && y<=120){
    if(y <= 100){
    x = x - speed;
    y = y -speed;
    }
    if(y >= 100){
    x = x - speed;
    y = y + speed;
    }    
 }
  rect(0, 20, 20 + random(10), 160 + random(10)); //farleft top
  if (x <= 20 && y <= 180) {
    x = x + speed;
    y = y + speed;
  }
  rect(0, 220, 20 + random(10), 240 + random(10)); //farleft bottom
  if (x <= 20 && y <= 380 && y >= 200) {
    x = x + speed;
    y = y - speed;
  }
  if (x <= 0 && y <= 220 && y >= 160) {
    x = 0;
  } //enter
  rect(0, 0, 560, 20); //top outline
  if (y <= 20 && x >= 20) {
    x = x + speed;
    y = y + speed;
  }
  rect(20, 400, 540 + random(10), 20 + random(10)); //bottom outline
  if (y >= 380 && x >= 20) {
    x = x + speed;
    y = y - speed;
  }
  rect(540, 20, 20, 40); //farright top
  if (x >= 520 && y >= 20 && y <= 60) {
    x = x - speed;
    y = y + speed;
  }
  rect(540, 100, 20, 300); //farright bottom
  if (x >= 520 && y >= 80 && y <= 400) {
    x = x - speed;
    y = y - speed;
  }


  rect(60, 120, 20, 80); //Y1
  if (x >= 40 && x <= 80 && y >= 100 && y <= 200) {
    if (x <= 60) {
      x = x - speed;
      y = y - speed;
    }
    if (x >= 60) {
      x = x + speed;
      y = y - speed;
    }
  }
  rect(60, 200, 60 + random(10), 20 + random(10)); //Y2
  if (x >= 40 && x <= 120 && y >= 180 && y <= 220) {
    if (y <= 60) {
      x = x - speed;
      y = y + speed;
    }
    if (y >= 60) {
      x = x - speed;
      y = y - speed;
    }
  }
  rect(120, 120, 20, 200); //Y3
  if (x >= 100 && x <= 140 && y >= 100 && y <= 320) {
    if (x <= 120) {
      x = x - speed;
      y = y - speed;
    }
    if (x >= 120) {
      x = x + speed;
      y = y + speed;
    }
  }
  rect(60, 300, 60 + random(10), 20 + random(10)); //y4
  if (x >= 40 && x <= 120 && y >= 280 && y <= 320) {
    if (y <= 300) {
      x = x - speed;
      y = y - speed;
    }
    if (y >= 300) {
      x = x - speed;
      y = y + speed;
    }
  }

  rect(60, 260, 20, 60); //Y5

  if (x >= 40 && x <= 80 && y >= 240 && y <= 320) {
    if (x <= 60) {
      x = x - speed;
      y = y - speed;
    }
    if (x >= 60) {
      x = x + speed;
      y = y + speed;
    }
  }

  rect(360, 60, 20, 160); //II1
  if (x >= 340 && x <= 380 && y >= 40 && y <= 220) {
    if (x <= 360) {
      x = x - speed;
      y = y + speed;
    }
    if (x >= 360) {
      x = x + speed;
      y = y + speed;
    }
  }


  rect(280, 340, 40 + random(10), 80 + random(10)); //bunny head
  if (x >= 260 && x <= 320 && y >= 320 && y <= 420) {
    if (y >= 320) {
      x = x + speed;
      y = y - speed;
    }
  }
  rect(240, 300, 40, 160); //left ear of bunny
  if (x >= 220 && x <= 280 && y >= 280 && y <= 460) {
    if (x <= 240) {
      x = x - speed;
      y = y - speed;
    }
    if (x >= 240) {
      x = x + speed;
      y = y - speed;
    }
  }

  rect(320, 300, 40, 160); //right ear of bunny
  if (x >= 300 && x <= 360 && y >= 280 && y <= 460) {
    if (x <= 320) {
      x = x - speed;
      y = y - speed;
    }
    if (x >= 320) {
      x = x + speed;
      y = y + speed;
    }
  }

  rect(180, 110, 20, 20); //left ear OF MONSTER
  rect(220, 110, 20, 20); //right ear
  rect(160, 130, 100, 10);
  rect(180, 140, 60, 20); //moster body
  rect(180, 160, 20, 20); //left leg
  rect(220, 160, 20, 20); //right leg

  fill(255, 255, 0, 0);
  rect(180, 110, 40, 30); //topleft
  if (x >= 160 && x <= 220 && y >= 90 && y <= 140) {
    if (x >= 160) {
      x = x - speed;
      y = y - speed;
    }
  }
  rect(220, 110, 20, 50); //topright
  if (x >= 200 && x <= 240 && y <= 160) {
    if (x >= 220 && y >= 110) {
      x = x + speed;
      y = y + speed;
    }
  }
  rect(200, 160, 40, 20); //bottom
  if (x >= 180 && x <= 260 && y >= 140 && y <= 180) {
    if (y >= 160) {
      x = x + speed;
      y = y + speed;
    }
  }
  rect(180, 140, 20, 40); //bottomleft
  if (x >= 160 && x <= 200 && y >= 120 && y <= 180) {
    if (x <= 180) {
      x = x - speed;
      y = y - speed;
    }
  }
  rect(160, 130, 20, 10); //left
  if (x >= 140 && x <= 180 && y >= 110 && y <= 140) {
    if (y <= 140) {
      x = x - speed;
      y = y - speed;
    }
    if (y >= 140) {
      x = x - speed;
      y = y + speed;
    }
  }
  rect(240, 130, 20, 10); //right
  if (x >= 220 && x <= 260 && y >= 110 && y <= 140) {
    if (y >= 130) {
      x = x - speed;
      y = y + speed;
    }
    if (y <= 130) {
      x = x + speed;
      y = y - speed;
    }
  }

  fill(R, G, 50); //monster eyes
  rect(190, 140, 10, 10);
  rect(220, 140, 10, 10);

  rect(250, 310, 20, 50); //bunny face
  rect(330, 310, 20, 50);
  rect(270, 370, 10, 20);
  rect(320, 370, 10, 20);
  rect(290, 400, 20, 10);




  if (x >= 543 && y >= 40 && y <= 100) {
    if (x <= 700) {
      x = x - speed;
      // prvarln("You Win");
      fill(255, 0, 0);
      textSize(60);
      text("You Win", width / 2 - 100, height / 2, 500, 100);
      R = random(50, 255);
      G = random(0, 255);
      o = 0;
    }
  } //exit

  if (keyIsPressed) { ////////////////////键盘事件  上下左右移动
    if (keyCode == 39) x = x + speed;
    if (keyCode == 37) x = x - speed;
    if (keyCode == 38) y = y - speed;
    if (keyCode == 40) y = y + speed;

  }
}
