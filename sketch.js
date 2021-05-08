var player;

var role = "1";

var ground;

var bush, bush2, stone, monster, invObs, invObs, invJump;

var bg1, bg2, bg3, bg4;

var obs;

var gamestate = 3;

var level = 2 ;

var ran = 1;

var Stone, Bush, Monster, Inv, InvJump;

var speed = -30;

var score=0;

var HiScore;

var platform = "pc";

var help, highScore, home, play, reset, Score, scorebg, title, ch1, ch2, ch3, helpScreen, helpScreen2;

function setup() {
	createCanvas(2048, 1546);

	pixelDensity(1);

// 	if(navigator.userAgent.match(/Android/i)){
// 		platform = "mobile";
// 	}

	player=createSprite(200,200);
	player.debug = false ;
	player.setCollider("rectangle",-110,0,200,430);
	player.depth = 10;

	player.addAnimation("run1",player1Run);
	player.addAnimation("run2",player2Run);
	player.addAnimation("run3",player3Run);
	player.scale = 0.5

	player.addAnimation("ani1",player1Idle );
	player.addAnimation("ani2",player2Idle );
	player.addAnimation("ani3",player3Idle );

	player.visible = false;

	invObs2 = createSprite(0,0,1,1);
	invObs2.visible = false;	

	ground = createSprite(810,1310,1620,10)
	ground.visible = false;

	bg2 = createSprite(0,773);
	bg2.addImage("parralax2",bg2I);
	bg2.depth = 0;

	bg3 = createSprite(0,773);
	bg3.addImage("parralax3",bg3I);
	bg3.depth = -1;

	bg4 = createSprite(0,773);
	bg4.addImage("parralax4",bg4I);
	bg4.depth = -2;

	obs = createGroup();
	Stone = createGroup();
	Bush = createGroup();
	Monster = createGroup();
	Inv = createGroup();
	InvJump = createGroup();

	HiScore = getItem("HiScore")

	Score = createSprite(1700,100);
	Score.scale = 3;
	Score.addImage("score",scoreI);
	Score.visible = false;

	highScore = createSprite(1600,1450);
	highScore.scale = 3;
	highScore.addImage("hscore",highScoreI);
	highScore.visible = false;

	title = createSprite(1028,500);
	title.scale = 3;
	title.addImage("title",titleI);
	title.visible = false;
	
	play = createSprite(1028,900);
	play.scale = 3;
	play.addImage("playa",playI);
	play.visible = false;
	
	help = createSprite(1028,1100);
	help.scale = 3;
	help.addImage("helpa", helpI);
	help.visible = false;

	home = createSprite(1444,900);
	// home.scale = 5;
	home.addImage("home", homeI);
	home.visible = false;
	home.depth = 50;

	reset = createSprite(624,900);
	// reset.scale = 5;
	reset.addImage("reset", resetI);
	reset.visible = false;
	reset.depth = 50;

	scorebg = createSprite(1028,700);
	scorebg.addImage("scorebg", scorebgI);
	scorebg.visible = false;
	scorebg.depth = 10;

	ch1 = createSprite(100,1450,200,200);
	ch1.addImage("oneI",one);
	ch2 = createSprite(320,1450,200,200);
	ch2.addImage("twoI",two);
	ch3 = createSprite(540,1450,200,200);
	ch3.addImage("threeI",three);

	ch1.visible = false;
	ch2.visible = false;
	ch3.visible = false;

	ch1.depth = 100;
	ch2.depth = 100;
	ch3.depth = 100;

	helpScreen = createSprite(1028,700);
	helpScreen.addImage("helpS",helpScreenI);
	helpScreen.visible = true;
	helpScreen.depth = 10;
	helpScreen.scale = 0.8; 

	helpScreen2 = createSprite(1028,1450 );
	helpScreen2.addImage("helpS2",helpScreenI2);
	helpScreen2.visible = true;
	helpScreen2.depth = 10;
	helpScreen2.scale = 0.8; 

  
}


function draw() {

speed = -(score+30);
  
invObs2.x = player.x;
invObs2.y = player.y;


if(level === 1)  {

	background(bg1I)

if(gamestate===0){

	

	if(mousePressedOver(play)||keyWentDown("space")){
		gamestate = 1
		sound.loop();
		sound.setVolume(0.3)
		sound2.stop();
		score = 0;
		speed=-30;	
	}

	Score.visible = false;
	highScore.visible = false;
	player.visible = false;
	title.visible = true;
	play.visible = true;
	help.visible = true;
	reset.visible = false;
	home.visible = false;
	scorebg.visible = false;
	bg2.visible = true;
	bg3.visible = true;
	bg4.visible = true;
	ch1.visible = false;
	ch2.visible = false;
	ch3.visible = false;
	helpScreen.visible = false;
	helpScreen2.visible = false;

	if(mousePressedOver(help)){
		gamestate = 4; 
	}

	if(platform === "mobile"){

		if(touches.length>0){
			gamestate = 1
			sound.loop();
			sound.setVolume(0.3)
			sound2.stop();
			score = 0;
			speed=-30;	
			touches = [];
		}

	}

}

 	 if (gamestate===1){ 

	sound2.stop();

	Score.visible = true;
	highScore.visible = true;	
	player.visible = true;
	title.visible = false;
	play.visible = false;
	help.visible = false;
	reset.visible = false;
	home.visible = false;
	scorebg.visible = false;
	helpScreen.visible = false;
	helpScreen2.visible = false;
	Score.x = 1700;
	Score.y = 100;
	highScore.x = 1600;
	highScore.y = 1450;


	bg2.velocityX = speed;

 	 if(bg2.x <= 0){
	 	 bg2.x=2048;
 	 }

	  bg3.velocityX = speed/3;

 	 if(bg3.x <= 0){
	 	 bg3.x=2048;
 	 }

	  bg4.velocityX = speed/8;

 	 if(bg4.x <= 0){
	 	 bg4.x=2048;
 	 }

	  movementIRG();

 	 obstacles();
 
 	 GameStoppingLv1();

	  if(HiScore !== null){
		 if(score>=HiScore){
			 HiScore = score
			 storeItem("HiScore",HiScore);
		 } 
	  }else{
		  HiScore = 0;
	  }

	  if(invObs2.isTouching(Inv)){
		  score+=1;
	  }

	  
	if(keyWentDown("1")){	
		bg2.velocityX = 0;
		bg3.velocityX = 0;
		bg4.velocityX = 0;
		obs.setVelocityXEach(0);
		obs.setLifetimeEach(-1);
		player.velocityX=0;
		player.velocityY=0;
		gamestate = 2
	}

	if(platform === "mobile"){

		ch1.visible = true;
		ch2.visible = true;
		ch3.visible = true;

	}

	  
	 

	}



 if(gamestate===2){
	  sound.stop();
	  Score.visible = true;
	  highScore.visible = true;
	  player.visible = false;
	  title.visible = false;
	  play.visible = false;
	  help.visible = false;
	  reset.visible = true;
	home.visible = true;
	scorebg.visible = true;
	Score.x = 1024
	Score.y = 650
	highScore.x = 1024;
	highScore.y = 430
	ch1.visible = false;
	ch2.visible = false;
	ch3.visible = false;
	helpScreen.visible = false;
	helpScreen2.visible = false;

	if(mousePressedOver(home)){
		gamestate=0;
	
	}


	if(mousePressedOver(reset)||keyWentDown("space")){
		gamestate=1;
		sound.loop();
		sound.setVolume(0.3)
		sound2.stop();
		score = 0;
		
	}	

	obs.destroyEach();

	
	if(platform === "mobile"){

		
	if(touches.length>0&&mouseX>1024){
		gamestate=0;
	
	}


	if(touches.length>0&&mouseX<1024&&mouseY<=1100){
		gamestate=1;
		sound.loop();
		sound.setVolume(0.3)
		sound2.stop();
		score = 0;
	}

	  
  }
}

if(gamestate===3){
	Score.visible = false;
	highScore.visible = false;
	player.visible = false;
	title.visible = false;
	play.visible = false;
	help.visible = false;
	reset.visible = false;
	home.visible = false;
	scorebg.visible = false;
	bg2.visible = true;
	bg3.visible = true;
	bg4.visible = true;
	ch1.visible = false;
	ch2.visible = false;
	ch3.visible = false;
	helpScreen.visible = true;
	helpScreen2.visible = true;

	if(keyWentDown("space")){
		gamestate = 0 
		sound2.loop();
		sound2.setVolume(0.3);
		score = 0;
		speed=-30;	
	}
}

if(gamestate===4){
	Score.visible = false;
	highScore.visible = false;
	player.visible = false;
	title.visible = false;
	play.visible = false;
	help.visible = false;
	reset.visible = false;
	home.visible = false;
	scorebg.visible = false;
	bg2.visible = true;
	bg3.visible = true;
	bg4.visible = true;
	ch1.visible = false;
	ch2.visible = false;
	ch3.visible = false;
	helpScreen.visible = true;
	helpScreen2.visible = true;

	if(keyWentDown("space")){
		gamestate = 0 
		score = 0;
		speed=-30;	
	}
}


} if(level === 2){

	background(logo);

	Score.visible = false;
	highScore.visible = false;
	player.visible = false;
	title.visible = false;
	play.visible = false;
	help.visible = false;
	reset.visible = false;
	home.visible = false;
	scorebg.visible = false;
	bg2.visible = false;
	bg3.visible = false;
	bg4.visible = false;
	helpScreen.visible = false;
	helpScreen2.visible = false;

	if(frameCount>=60){
	level = 1;
	}

} 


 
  
  drawSprites();

  if(gamestate === 1){

  	  textFont("New Times Roman"); fill(rgb(255,206,59)); textSize(70);text(HiScore,1700,1470)

	  textFont("New Times Roman"); fill(rgb(255,206,59)); textSize(70);text(score,1750,120);
  }

  if(gamestate===0){

  
 }

 if(gamestate === 2){
	textFont("New Times Roman"); fill(rgb(255,206,59)); textSize(70);text(HiScore,1100,450)

	textFont("New Times Roman"); fill(rgb(255,206,59)); textSize(70);text(score,1080,670);
 }

 textFont("New Times Roman"); fill(0); textSize(50);text("Beta Version: 0.4",100,120);

//  console.log(speed);


}
