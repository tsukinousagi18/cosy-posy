var song;
var music_play=false;

function preload(){
  song=loadSound("spring-day-314723.mp3");
}

let flowers=[];

let flower_types={
  sunflower:{
    draw:function(x, y){
      push();
      translate(x,y);
      //scale(0.6);
      angleMode(DEGREES);
      noStroke();
      fill(255, 204, 0);
      let num_petals=11;
      let petal_length=100;
      let petal_width=40;
    
      for(i=0;i<num_petals;i++){
        rotate(360/num_petals);
        ellipse(0, petal_length/2, petal_width, petal_length);
      }
    
      noStroke();
      fill(80,50,50);
      ellipse(0,0,80,80);
      pop();
    }

  },

  daisy:{
    draw:function(x,y){
      push();
      translate(x,y);
      //scale(0.4);
      angleMode(DEGREES);
      noStroke();
      fill("white");
      let num_petals=6;
      let petal_length=90;
      let petal_width=55;
    
      for(i=0;i<num_petals;i++){
        rotate(360/num_petals);
        ellipse(0, petal_length/2, petal_width, petal_length);
      }
    
      noStroke();
      fill("#ffff99");
      ellipse(0,0,60,60);
      pop();
    }
  },

  sakura:{
    draw:function(x, y) {
      push();
      translate(x, y);
      //scale(0.5);
      angleMode(DEGREES);
      noStroke();
    
      // Petals
      fill("#f8bbd0");   
      let num_petals = 5;
      let petal_length = 80;
      let petal_width = 55;
    
      for (let i = 0; i < num_petals; i++) {
        rotate(360 /num_petals);
        ellipse(0, petal_length/2, petal_width, petal_length);
      }
        // Flower center
        fill("#ee77a3");   
        circle(-10, 0, 7);
        circle(10, 0, 7);
        circle(0, -10, 7);
        circle(0, 10, 7);
      
        pop();
    
    }
  },

  poppy:{
    draw:function(x,y){
      push();
      translate(x,y);
      //scale(0.5);
      angleMode(DEGREES);
      noStroke();
    
      fill("#ff7c80");
      let num_petals=4;
      let petal_length=90;
      let petal_width=95;
    
      for(i=0;i<num_petals;i++){
        rotate(360/num_petals);
        ellipse(0, petal_length / 2, petal_width, petal_length);
      }
    
      noStroke();
      fill("#61503e");
      ellipse(0,0,55,55);
      pop();

    }
  },

  forgetmenot:{
    draw:function(x,y){
      push();
      translate(x,y);
      //scale(0.4);
      angleMode(DEGREES);
      noStroke();
      fill("#b3ccff");
      let num_petals=5;
      let petal_length=90;
      let petal_width=80;
    
      for(i=0;i<num_petals;i++){
        rotate(360/num_petals);
        ellipse(0, petal_length/2, petal_width, petal_length);
      }
    
      noStroke();
      fill("#ffffb3");
      ellipse(0,0,50,50);
      pop();
    }
  },

  marigold:{
    draw:function(x,y){
      push();
      translate(x,y);
      //scale(0.5);
      angleMode(DEGREES);
      noStroke();
      fill("#ffcc99");
      let num_petals=12;
      let petal_length=90;
      let petal_width=60;
    
      for(i=0;i<num_petals;i++){
        rotate(360/num_petals);
        ellipse(0, petal_length/2, petal_width, petal_length);
      }
    
      fill("#ffbf80");
      let num_petals1=8;
      let petal_length1=90;
      let petal_width1=60;
    
      for(i=0;i<num_petals1;i++){
        rotate(360/num_petals1);
        ellipse(0, petal_length1/10, petal_width1, petal_length1);
      }
    
      pop();
    
    }
  }

}

function twinkle(){
  for(let i=flowers.length-1; i>=0; i--){
    let flower=flowers[i];
    flower.draw();
    flower.size *= 0.99; //wilting animation
    flower.lifespan -= 1; 
    
    if(flower.lifespan<=0){
      flowers.splice(i,1);
    }

  }
}


function flower_power() {
  for(i=0;i<20;i++){
    let flower=create_flower();
    flowers.push(flower);
  }
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  flower_power();
}

function draw(){
  background("#fce4ec");
  // flower_types.sunflower.draw(1000,150);
  // flower_types.daisy.draw(800,400);
  // flower_types.forgetmenot.draw(150,300);
  // flower_types.sakura.draw(400,50);
  // flower_types.marigold.draw(300,150);
  // flower_types.poppy.draw(1000,400);
  // let flower1 = create_flower(); //dbt
  // draw_flower(flower1);
  for (let flower of flowers) {
    draw_flower(flower);
  }
  twinkle();
}

function create_flower(){
  let types=Object.keys(flower_types);
  let the_chosen_one=random(types);

  let flower= {
    x: random(55, windowWidth - 55), //calc for screenspace
    y: random(55, windowHeight - 55),
    lifespan: random(300,350),
    size: random(40, 90),
    type:the_chosen_one,
    draw: function(){
      push();
      translate(this.x, this.y);
      scale(this.size / 100);  
      flower_types[this.type].draw(0, 0);
      pop();
    }
  };
  return flower;
}

function draw_flower(flower) {
  push();
  translate(flower.x, flower.y);
  scale(flower.size / 100);  
  flower_types[flower.type].draw(0, 0);  
  pop();
}

function mousePressed() {
  if (!music_play) {
    song.play();  
    music_play = true;
    song.loop();
  }

  let flower = create_flower();

  // reassign x to be mouseX
  flower.x = mouseX; 
  
  // reassign y to be mouseY
  flower.y = mouseY;

  // add the flower to the flowers array
  flowers.push(flower);

}








