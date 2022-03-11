var fugete,fugeteImg;
var espaco,espacoImg;
var estrelas,estrelasImg;
var meteoro,meteoroImg;
var PLAY=1;
var END=0;
var gameStage = PLAY
var score;



function preload(){
fugeteImg = loadImage("fugete.png")
espacoImg = loadImage("space.webp")
estrelasImg = loadImage("estrela.png")
meteoroImg = loadImage("meteoro.png")
}

function setup() {
createCanvas(900,900);
//criar fugete,espaço
fugete = createSprite(300,300,50,50);
fugete.scale=0.4;

espaco = createSprite(400,400);
espaco.velocityY = 1;

fugete.addImage("fugete",fugeteImg);
espaco.addImage("space",espacoImg);

estrelasGroup = new Group();
meteoroGroup = new Group();
score=0
}

function draw() {
backgroud(0);
if(gameStage===PLAY){
if(espaco.y > 400){
   espaco.y = 300
}

if(keyDown("left_arrow")){
   fugete.x=fugete.x-3;
}

if(keyDown("right_arrow")){
    fugete.x=fugete.x+3;
}

spawnmeteor();
spawnstars();

if(estrelasGroup.isTouching(fugete)){
   score=score+1
   estrelasGroup.destroyEach();
}

if(meteoroGroup.isTouching(fugete)){
   fugete.destroy();
   gameStage=END
}

}

drawsprite();
if(gameStage===END){
   stroke("yellow");
    fill("yellow");
    textSize(30);
    text("Gamer Over",300,300);
}

textSize(25);
  text("Pontuação: "+ score,250,50);
}
function spawnstars(){
if(frameCount % 240===0){
   estrelas=createSprite(300,20,20,20)
   estrelas.addImage(estrelasImg)
   estrelas.x=Math.round(random(100,550));
   fugete.depth=estrelas.depth;
   fugete.depth+=1;
   lifetime=700;
   estrelasGroup.add(estrelas)
}

}
function spawnmeteor(){
   if(frameCount % 240===0){
      meteoro=createsprite(300,20,20,20)
      meteoro.addImage(meteoroImg)
      meteoro.x=Math.round(random(100,550));
      fugete.depth=meteoro.depth;
      fugete.depth+=1;
      lifetime=700;
      meteoroGroup.add(meteoro)
   }      
}
