var level1, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, backgroundIMG
var player, playerIMG
var level2, obstacle6, obstacle7, obstacle8
function preload(){
  backgroundIMG = loadImage("images/bg.jpg");
  playerIMG = loadImage("images/player.png");
}

function setup() {
  createCanvas(1200,800);
  level1 = createSprite(400, 200, 1000, 20);
  obstacle1 = createSprite(600, 175, 50, 50);
  obstacle2 = createSprite(700, 150, 50, 100);
  obstacle3 = createSprite(800, 165, 50, 75);
  obstacle4 = createSprite(500, 165, 50, 75);
  obstacle5 = createSprite(400, 175, 50, 50);
  level2 = createSprite(700, 400, 1000, 20);
  obstacle6 = createSprite(800, 375, 50, 50);
  obstacle7 = createSprite(650, 375, 50, 50);
  obstacle8 = createSprite(500, 375, 50, 50);
  level3 = createSprite(400, 600, 1000, 20);
  level4 = createSprite(700, 790, 1500, 20);
  player = createSprite(50,125);
  player.addImage(playerIMG);
  player.scale = 0.75;

}

function draw() {
  background(backgroundIMG);  
  drawSprites();
}