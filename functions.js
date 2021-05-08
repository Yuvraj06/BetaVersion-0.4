

//                                          JKL CHANGING CHARECTORS


function jkl(){
	if(keyDown("j")){
		player.changeAnimation("run1",player1Run );
		player.scale = 0.5	
		player.setCollider("rectangle",-110,0,300,430);	
	}
	else if(keyDown("k")){
		player.changeAnimation("run2",player2Run );
		player.scale = 0.5
		player.setCollider("rectangle",-100,0,380,350);
	}
	else if(keyDown("l")){
		player.changeAnimation("run3",player3Run );
		player.scale = 0.4
		player.setCollider("rectangle",0,0,370,600);
	}
}




//                                               SIMPLE MOVEMENT

function movement(){
	if (keyDown(RIGHT_ARROW) || keyDown("d")) {
	  player.x += 10;
	  player.changeAnimation("run1",player1Run );
	  player.scale = 0.5 
	}
	else if (keyDown(LEFT_ARROW) || keyDown("a")) {
	  player.x -= 10;
	  player.changeAnimation("run1",player1Run );
	}
	else if ((keyDown(UP_ARROW) || keyDown("w")|| keyDown("space"))) {
	  player.velocityY=-23;
	}else{
		player.changeAnimation("run3",player1Idle );
		player.scale = 0.5
	}
	
	
	// player.velocityY= player.velocityY+2;
	
  
	
  }




  //                                           MOVEMENT OF INFINITE RUNNER GAME

   function movementIRG(){

	// (keyDown(UP_ARROW) || keyDown("w")|| keyDown("space"))

    if (player.isTouching(InvJump) && player.collide(ground)) {
        if(role === "1"){
            player.velocityY=-35;
			player.changeAnimation("ani1",player1Idle);
		
        }
        else if(role === "2"){
            player.velocityY=-17;
			player.changeAnimation("ani2",player2Idle );
		}
        else if(role === "3"){
            player.velocityY=-23;
			player.changeAnimation("ani3",player3Idle );

        }
      
    }
	if(player.collide(ground)){

		if(role === "1"){
			player.changeAnimation("run1",player1Run );
         }
        else if(role === "2"){
			player.changeAnimation("run2",player2Run );

        }
        else if(role === "3"){
			player.changeAnimation("run3",player3Run );

        }

	}
	
    if(keyDown("j")){
		player.changeAnimation("run1",player1Run );
		player.scale = 0.5	
		player.setCollider("rectangle",-110,0,200,430);
        role = "1";	

	}
	else if(keyDown("k")){
		player.changeAnimation("run2",player2Run );
		player.scale = 0.5
		player.setCollider("rectangle",-100,0,380,350);
        role = "2";

	}
	else if(keyDown("l")){
		player.changeAnimation("run3",player3Run );
		player.scale = 0.4
		player.setCollider("rectangle",0,0,370,600);
        role = "3";

	}

	if(platform === "mobile"){

		
		if(touches.length>=0&& (mouseX>=0&&mouseX<=200)){
			player.changeAnimation("run1",player1Run );
			player.scale = 0.5	
			player.setCollider("rectangle",-110,0,200,430);
			role = "1";	
			touches = [];
	
		}
		else if(touches.length>=0&& (mouseX>=220&&mouseX<=420)){
			player.changeAnimation("run2",player2Run );
			player.scale = 0.5
			player.setCollider("rectangle",-100,0,380,350);
			role = "2";
			touches = [];
	
		}
		else if(touches.length>=0&& (mouseX>=440&&mouseX<=640)){
			player.changeAnimation("run3",player3Run );
			player.scale = 0.4
			player.setCollider("rectangle",0,0,370,600);
			role = "3";
			touches = [];
	
		}

	}

    player.velocityY= player.velocityY+2;

	player.collide(ground);
 
	
  }


  //                                            OBSTACLES IRG

function obstacles(){

	if(frameCount%80===0){		

		// ran = 1;

		if(ran===1){

		bush = createSprite(2148,1230);
		bush.addImage("bushes",bush2I);
		bush.velocityX = speed;
		bush.scale = 4

		obs.add(bush);
		bush.lifetime = 200;
		Bush.add(bush);

		bush.debug = false
		bush.setCollider("rectangle",0,0,bush.width-40,bush.height-20);
		bush.depth = 1;

		invObs = createSprite(2148,1230,1,2000);
		invObs.velocityX = speed;
		invObs.lifetime = 200;
		invObs.visible = false;

		invJump = createSprite(bush.x,bush.y,600+score*10,20);
		invJump.velocityX = speed;
		invJump.lifetime = 200;
		invJump.visible = false;

		InvJump.add(invJump);

		ran = Math.round(random(1,3)); 
		
		}
		else if(ran === 2){

		stone = createSprite(2148,1180);
		stone.addImage("Stone",stoneI);
		stone.velocityX = speed;
		stone.scale = 5

		obs.add(stone);
		Stone.add(stone)
		stone.lifetime = 200;

		stone.debug = false
		stone.setCollider("rectangle",0,0,stone.width-40,stone.height);
		stone.depth = 1;

		invObs = createSprite(2148,1230,1,2000);
		invObs.velocityX = speed;
		invObs.lifetime = 200;
		invObs.visible = false;

		ran = Math.round(random(1,3)); 

		if(ran === 2){
			ran = 4;
		}

		}

		else if(ran === 3){

		monster = createSprite(2148,1180);
		monster.addImage("Monster",monsterI);
		monster.velocityX = speed;
		monster.scale = 0.8

		obs.add(monster);
		Monster.add(monster)
		monster.lifetime = 200;

		monster.debug = false
		monster.setCollider("rectangle",0,0,monster.width-40,monster.height);
		monster.depth = 1;

		invObs = createSprite(2148,1230,1,2000);
		invObs.velocityX = speed;
		invObs.lifetime = 200;
		invObs.visible = false;

		ran = Math.round(random(1,3)); 

		if(ran === 3){
			ran = 4;
		}


		}else{
			ran = Math.round(random(1,3)); 
		}

		Inv.add(invObs);




	}


}
