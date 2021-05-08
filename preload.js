var player1Idle , player2Idle , player3Idle ,player1Run, player2run, player3run, player1jump, player2jump, player3jump;
var bg1I, bg2I, bg3I, bg4I;
var bushI, bush2I, stoneI;
var sound, sound2;
var monsterI;
var helpI, highScoreI, homeI, playI, resetI, scoreI, scorebgI, titleI;
var logo, one, two, three, helpScreenI, helpScreenI2;

function preload()
{
	player1Idle  = loadAnimation("assets/ch1/Jump (1).png","assets/ch1/Jump (2).png","assets/ch1/Jump (3).png","assets/ch1/Jump (4).png","assets/ch1/Jump (5).png","assets/ch1/Jump (6).png","assets/ch1/Jump (7).png","assets/ch1/Jump (8).png","assets/ch1/Jump (9).png");


	player1Run  =  loadAnimation("assets/ch1/Run (1).png","assets/ch1/Run (2).png","assets/ch1/Run (3).png","assets/ch1/Run (4).png","assets/ch1/Run (5).png","assets/ch1/Run (6).png","assets/ch1/Run (7).png","assets/ch1/Run (8).png","assets/ch1/Run (9).png","assets/ch1/Run (10).png","assets/ch1/Run (11).png","assets/ch1/Run (12).png","assets/ch1/Run (13).png","assets/ch1/Run (14).png","assets/ch1/Run (15).png");


	player2Idle  = loadAnimation("assets/ch2/Jump (1).png","assets/ch2/Jump (2).png","assets/ch2/Jump (3).png","assets/ch2/Jump (4).png","assets/ch2/Jump (5).png","assets/ch2/Jump (6).png","assets/ch2/Jump (7).png","assets/ch2/Jump (8).png","assets/ch2/Jump (9).png","assets/ch2/Jump (10).png","assets/ch2/Jump (11).png","assets/ch2/Jump (12).png");


	player2Run  =  loadAnimation("assets/ch2/Run (1).png","assets/ch2/Run (2).png","assets/ch2/Run (3).png","assets/ch2/Run (4).png","assets/ch2/Run (5).png","assets/ch2/Run (6).png","assets/ch2/Run (7).png","assets/ch2/Run (8).png");


	player3Idle  = loadAnimation("assets/ch3/Jump (1).png","assets/ch3/Jump (2).png","assets/ch3/Jump (3).png","assets/ch3/Jump (4).png","assets/ch3/Jump (5).png","assets/ch3/Jump (6).png","assets/ch3/Jump (7).png","assets/ch3/Jump (8).png","assets/ch3/Jump (9).png","assets/ch3/Jump (10).png");


	player3Run  =  loadAnimation("assets/ch3/Run (1).png","assets/ch3/Run (2).png","assets/ch3/Run (3).png","assets/ch3/Run (4).png","assets/ch3/Run (5).png","assets/ch3/Run (6).png","assets/ch3/Run (7).png","assets/ch3/Run (8).png","assets/ch3/Run (9).png","assets/ch3/Run (10).png");

	bg1I = loadImage("assets/BG/1.png");
	bg2I = loadImage("assets/BG/2.png");
	bg3I = loadImage("assets/BG/3.png");
	bg4I = loadImage("assets/BG/4.png");

	bushI =  loadImage("assets/Object/Bush (1).png");
	bush2I = loadImage("assets/Object/Bush (3).png");

	stoneI = loadImage("assets/Object/Stone.png");

	sound = loadSound("assets/aap_se_milkar.mp3");
	sound2= loadSound("assets/ms1.mp3");

	monsterI = loadImage("assets/monster.png");

	helpI = loadImage("assets/ui/help.png");
	highScoreI = loadImage("assets/ui/highscore.png");
	homeI = loadImage("assets/ui/home.png");
	playI = loadImage("assets/ui/play.png");
	resetI = loadImage("assets/ui/reset.png");
	scoreI = loadImage("assets/ui/score.png");
	scorebgI = loadImage("assets/ui/scorebg.png");
	titleI = loadImage("assets/ui/title.png");

	logo = loadImage("assets/logo.png");

	one = loadImage("assets/ui/1.png");
	two = loadImage("assets/ui/2.png");
	three = loadImage("assets/ui/3.png");

	helpScreenI = loadImage("assets/ui/helpScreen.png");
	helpScreenI2 = loadImage("assets/ui/help2.png");
}