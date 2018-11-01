let subsystemState = function () {}

subsystemState.prototype.preload=function(){
	//load json files for the spritesheet; also load texture maps
	newGame.load.atlasJSONHash ('head', 'assets/image/robot_body/heads/heads.png', 'assets/image/robot_body/heads/heads.json');
	newGame.load.atlasJSONHash ('arm', 'assets/image/robot_body/arms/arms.png', 'assets/image/robot_body/arms/arms.json');
	newGame.load.atlasJSONHash ('body', 'assets/image/robot_body/bodies/bodies.png', 'assets/image/robot_body/bodies/bodies.json');
	newGame.load.atlasJSONHash ('wheel', 'assets/image/robot_body/wheels/wheels.png', 'assets/image/robot_body/wheels/wheels.json');

	// invisibleheads.
	newGame.load.image ('invisiHeadButton', 'assets/image/robot_body/heads/transparent_head.png')
	newGame.load.image ('invisiArmButton', 'assets/image/robot_body/arms/transparent_arm.png');
	newGame.load.image ('invisiBodyButton', 'assets/image/robot_body/bodies/transparent_body.png');
	newGame.load.image ('invisiWheelButton', 'assets/image/robot_body/wheels/transparent_wheel.png');

	newGame.load.image ('confirmRobotButton', 'assets/image/confirm.png');
}

// variables to choose the head
var chosenHead;
var chosenArm_right;
var chosenArm_left;
var chosenBody;
var chosenWheel;

//variables to act as invisible buttons
var invisiHead;
var invisiArmR;
var invisiArmL;
var invisiBody;
var invisiWheel;

//groups
var robotGroup;
var mainTextGroup;

//general buttons.
var confirm;

//final decision variables. these are passed into the robotConfiguration Array.
var headDecision = 0;
var armRightDecision = 0;
var armLeftDecision = 0;
var bodyDecision = 0;
var wheelDecision = 0;

//text variables
var style;
var textTitle;
var mainInstructionsText;
var errorMessage;

subsystemState.prototype.create =function(){
	style = { font: "bold 32px Arial", fill: "#F00", boundsAlignH: "center", boundsAlignV: "middle", wordWrap: true, wordWrapWidth: 450 };
	
	mainTextGroup = newGame.add.group();

	textTitle = newGame.add.text(0, 0, "Build Your Robot", style);
	mainInstructionsText = newGame.add.text(0,40, 'Instructions:', style);
	errorMessage = newGame.add.text (300,400, 'A robot has not been built! Click on a subsystem to add it to the robot!', style);
	errorMessage.alpha = 0;

	mainTextGroup.add(textTitle);
	mainTextGroup.add(mainInstructionsText);

// MAKING THE ROBLOX CHARACTER
	robotGroup = newGame.add.group();

	chosenHead = newGame.add.sprite(250,100, 'head', 0);
	chosenBody = newGame.add.sprite(0,0, 'body',0).alignTo(chosenHead, Phaser.BOTTOM_CENTER, 0, 10);
	chosenArm_right = newGame.add.sprite(0,0, 'arm', 5).alignTo(chosenBody, Phaser.LEFT_CENTER, -10,0);
	chosenArm_left = newGame.add.sprite(0,0, 'arm', 5).alignTo(chosenBody, Phaser.RIGHT_CENTER, 10, 0);
	chosenWheel = newGame.add.sprite(0, 0, 'wheel', 0).alignTo(chosenBody, Phaser.BOTTOM_CENTER, 0,10);

	robotGroup.add (chosenHead);
	robotGroup.add (chosenBody);
	robotGroup.add (chosenArm_right);
	robotGroup.add (chosenArm_left);
	robotGroup.add (chosenWheel);

//creating invisible buttons.

	invisiHead = newGame.add.button(250,100, 'invisiHeadButton', chooseHead);
	invisiHead.alpha =0;

	invisiBody = newGame.add.button(0,0, 'invisiBodyButton', chooseBody).alignTo(invisiHead, Phaser.BOTTOM_CENTER, 0, 10);	
	invisiBody.alpha = 0;

	invisiArm_right = newGame.add.button(0,0, 'invisiArmButton', chooseArm_R).alignTo(invisiBody, Phaser.LEFT_CENTER, -10,0);
	invisiArm_right.alpha = 0;

	invisiArm_left = newGame.add.button(0,0, 'invisiArmButton', chooseArm_L).alignTo(invisiBody, Phaser.RIGHT_CENTER, 10, 0);	
	invisiArm_left.alpha = 0;

	invisiWheel = newGame.add.button(0,0, 'invisiWheelButton', chooseWheel).alignTo(invisiBody, Phaser.BOTTOM_CENTER, 0,10);
	invisiWheel.alpha = 0;

	//confirm button available in case selection is wanted
	confirm = newGame.add.button(0,0, 'confirmRobotButton', robotDesignConfirm).alignTo(chosenWheel, Phaser.BOTTOM_CENTER, 0, 50);	
	confirm.alpha = 0;
}

subsystemState.prototype.update = function(){

}

function robotDesignConfirm (){
	newGame.world.removeAll();
	// save robot preferences to robotConfiguration global variable. if 0 = Null
	robotConfiguration = [headDecision, armRightDecision, armLeftDecision, bodyDecision, wheelDecision];

	if (problemDecision = 1){
		newGame.state.start ("PQ_A");
	}
	else if (problemDecision = 2){
		newGame.state.start ("PQ_B");
	}
	else if (problemDecision = 3){
		newGame.state.start ("PQ_C");
	}

/*
	//displays configuration values
	arrayRobotShow = newGame.add.text (50, 300, robotConfiguration, style);
*/	

}

function clearScreen_subsystem(){
	//making home screen contents disappear
	robotGroup.alpha = 0;
	mainTextGroup.alpha = 0;
	confirm.alpha = 0;
	errorMessage.alpha = 0;

	//disabling homescreen buttons.
	invisiHead.inputEnabled = false;
	invisiBody.inputEnabled = false;
	invisiArm_right.inputEnabled = false;
	invisiArm_left.inputEnabled = false;
	invisiWheel.inputEnabled = false;

	confirm.inputEnabled = false;

}

function showRobotDesignMenu(){

	//making home screen contents reappear
	robotGroup.alpha = 1;
	mainTextGroup.alpha = 1;
	confirm.alpha = 1;

	//enabling homescreen buttons.
	invisiHead.inputEnabled = true;
	invisiBody.inputEnabled = true;
	invisiArm_right.inputEnabled = true;
	invisiArm_left.inputEnabled = true;
	invisiWheel.inputEnabled = true;

	confirm.inputEnabled = true;
}

/* below are the different functions for each leg part.
	chooseHead - chooses the heads
	chooseBody - choose the body
	chooseArm_R - choose right arm
	chooseArm_L - choose left arm
	chooseWheel - chooses the leg. */
function chooseHead(){
	//clears screen
	clearScreen_subsystem();
	headDecision = 0;

	//gives instructions
	let chooseHeadInstructions = newGame.add.text(0,0, 'congrats', style);
	chooseHeadInstructions.alpha = 1;

	//displays images of the heads types.
	headOptionA = newGame.add.sprite(0,50, 'head',1);
	headOptionB = newGame.add.sprite(0,0, 'head', 2).alignTo(headOptionA, Phaser.BOTTOM_CENTER, 0,10);
	headOptionC = newGame.add.sprite(0,0, 'head', 3).alignTo(headOptionB, Phaser.BOTTOM_CENTER, 0,10);

	//displays descriptions of the head types.
	/* descriptions to be added later, but they will be adjacent to the headOptions. 
	    most likely images. */

	// buttons to make head selections.
	let invisiHeadOptionA = newGame.add.button(0,50, 'invisiHeadButton', chooseHeadA);
	invisiHeadOptionA.alpha =0;

	let invisiHeadOptionB = newGame.add.button(0,0, 'invisiHeadButton', chooseHeadB).alignTo(invisiHeadOptionA, Phaser.BOTTOM_CENTER, 0,10);
	invisiHeadOptionB.alpha =0;

	let invisiHeadOptionC = newGame.add.button(0,0, 'invisiHeadButton', chooseHeadC).alignTo(invisiHeadOptionB, Phaser.BOTTOM_CENTER, 0,10);
	invisiHeadOptionC.alpha =0;

	// functions assigning head options.
	function chooseHeadA (){
		headDecision = 1;

		robotGroup.replace(chosenHead,headOptionA);
		robotGroup.resetChild(headOptionA, 250,100);

		clearChooseHeadMenu();

		//reassign chosenhead and make the head visible.
		chosenHead = headOptionA;
		headOptionA.alpha = 1;

		//return to menu
		showRobotDesignMenu();
	}

	function chooseHeadB (){
		headDecision = 2;

		robotGroup.replace(chosenHead, headOptionB);
		robotGroup.resetChild(headOptionB, 250, 100);

		clearChooseHeadMenu();

		//reassign chosenhead and make the head visible.
		chosenHead = headOptionB;
		headOptionB.alpha = 1;

		//return to menu
		showRobotDesignMenu();
	}

	function chooseHeadC (){
		headDecision = 3;

		robotGroup.replace(chosenHead, headOptionC);
		robotGroup.resetChild(headOptionC, 250, 100);

		clearChooseHeadMenu();

		//reassign chosenhead and make the head visible.
		chosenHead = headOptionC;
		headOptionC.alpha = 1;

		//return to menu
		showRobotDesignMenu();
	}

	function clearChooseHeadMenu (){
		// hide headoptions
		headOptionA.alpha = 0;
		headOptionB.alpha = 0;	
		headOptionC.alpha = 0;

		chooseHeadInstructions.alpha = 0;

		invisiHeadOptionA.inputEnabled = false;
		invisiHeadOptionB.inputEnabled = false;
		invisiHeadOptionC.inputEnabled = false;
	}
}

function chooseBody(){
	//clears screen
	clearScreen_subsystem();
	bodyDecision = 0;

	//gives instructions
	let chooseBodyInstructions = newGame.add.text(0,0, 'woah you want a body?', style);
	chooseBodyInstructions.alpha = 1;

	//displays images of the body types.
	bodyOptionA = newGame.add.sprite(0,50, 'body',1);
	bodyOptionB = newGame.add.sprite(0,0, 'body', 2).alignTo(bodyOptionA, Phaser.BOTTOM_CENTER, 0,10);
	bodyOptionC = newGame.add.sprite(0,0, 'body', 3).alignTo(bodyOptionB, Phaser.BOTTOM_CENTER, 0,10);

	//displays descriptions of the body types.
	/* descriptions to be added later, but they will be adjacent to the headOptions. 
	    most likely images. */

	// buttons to make body selections.
	let invisiBodyOptionA = newGame.add.button(0,50, 'invisiBodyButton', chooseBodyA);
	invisiBodyOptionA.alpha =0;

	let invisiBodyOptionB = newGame.add.button(0,0, 'invisiBodyButton', chooseBodyB).alignTo(invisiBodyOptionA, Phaser.BOTTOM_CENTER, 0,10);
	invisiBodyOptionB.alpha =0;

	let invisiBodyOptionC = newGame.add.button(0,0, 'invisiBodyButton', chooseBodyC).alignTo(invisiBodyOptionB, Phaser.BOTTOM_CENTER, 0,10);
	invisiBodyOptionC.alpha =0;

	// functions assigning head options.
	function chooseBodyA (){
		bodyDecision = 1;

		robotGroup.replace(chosenBody,bodyOptionA);
		robotGroup.resetChild(bodyOptionA, 0,0).alignTo(invisiHead, Phaser.BOTTOM_CENTER, 0,10);

		clearChooseBodyMenu();

		//reassign chosenbody and make the body visible.
		chosenBody = bodyOptionA;
		bodyOptionA.alpha = 1;

		//return to menu
		showRobotDesignMenu();
	}

	function chooseBodyB (){
		bodyDecision = 2;

		robotGroup.replace(chosenBody,bodyOptionB);
		robotGroup.resetChild(bodyOptionB, 0,0).alignTo(invisiHead, Phaser.BOTTOM_CENTER, 0,10);

		clearChooseBodyMenu();

		//reassign chosenbody and make the body visible.
		chosenBody = bodyOptionB;
		bodyOptionB.alpha = 1;

		//return to menu
		showRobotDesignMenu();
	}

	function chooseBodyC (){
		bodyDecision = 3;

		robotGroup.replace(chosenBody,bodyOptionC);
		robotGroup.resetChild(bodyOptionC, 0,0).alignTo(invisiHead, Phaser.BOTTOM_CENTER, 0,10);

		clearChooseBodyMenu();

		//reassign chosenbody and make the body visible.
		chosenBody = bodyOptionC;
		bodyOptionC.alpha = 1;

		//return to menu
		showRobotDesignMenu();
	}

	function clearChooseBodyMenu (){
		// hide body options
		bodyOptionA.alpha = 0;
		bodyOptionB.alpha = 0;	
		bodyOptionC.alpha = 0;

		chooseBodyInstructions.alpha = 0;

		invisiBodyOptionA.inputEnabled = false;
		invisiBodyOptionB.inputEnabled = false;
		invisiBodyOptionC.inputEnabled = false;
	}
}

function chooseArm_R(){
	//clears screen
	clearScreen_subsystem();
	armRightDecision = 0;

	//gives instructions
	let chooseArm_RInstructions = newGame.add.text(0,0, 'woah you want a arm?', style);
	chooseArm_RInstructions.alpha = 1;

	//displays images of the arm types.
	armRightOptionA = newGame.add.sprite(0,50, 'arm',1);
	armRightOptionB = newGame.add.sprite(0,0, 'arm', 2).alignTo(armRightOptionA, Phaser.BOTTOM_CENTER, 0,10);
	armRightOptionC = newGame.add.sprite(0,0, 'arm', 3).alignTo(armRightOptionB, Phaser.BOTTOM_CENTER, 0,10);

	//displays descriptions of the arm types.
	/* descriptions to be added later, but they will be adjacent to the headOptions. 
	    most likely images. */

	// buttons to make arm selections.
	let invisiarmRightOptionA = newGame.add.button(0,50, 'invisiArmButton', chooseArm_RA);
	invisiarmRightOptionA.alpha =0;

	let invisiarmRightOptionB = newGame.add.button(0,0, 'invisiArmButton', chooseArm_RB).alignTo(invisiarmRightOptionA, Phaser.BOTTOM_CENTER, 0,10);
	invisiarmRightOptionB.alpha =0;

	let invisiarmRightOptionC = newGame.add.button(0,0, 'invisiArmButton', chooseArm_RC).alignTo(invisiarmRightOptionB, Phaser.BOTTOM_CENTER, 0,10);
	invisiarmRightOptionC.alpha =0;

	// functions assigning head options.
	function chooseArm_RA (){
		armRightDecision = 1;

		robotGroup.replace(chosenArm_right,armRightOptionA);
		robotGroup.resetChild(armRightOptionA, 0,0).alignTo(invisiBody, Phaser.LEFT_CENTER, -10,0);

		clearchooseArm_RMenu();

		//reassign chosenArm_right and make the arm visible.
		chosenArm_right = armRightOptionA;
		armRightOptionA.alpha = 1;

		//return to menu
		showRobotDesignMenu();
	}

	function chooseArm_RB (){
		armRightDecision = 2;

		robotGroup.replace(chosenArm_right,armRightOptionB);
		robotGroup.resetChild(armRightOptionB, 0,0).alignTo(invisiBody, Phaser.LEFT_CENTER, -10,0);

		clearchooseArm_RMenu();

		//reassign chosenArm_right and make the arm visible.
		chosenArm_right = armRightOptionB;
		armRightOptionB.alpha = 1;

		//return to menu
		showRobotDesignMenu();
	}

	function chooseArm_RC (){
		armRightDecision = 3;

		robotGroup.replace(chosenArm_right,armRightOptionC);
		robotGroup.resetChild(armRightOptionC, 0,0).alignTo(invisiBody, Phaser.LEFT_CENTER, -10,0);

		clearchooseArm_RMenu();

		//reassign chosenArm_right and make the arm visible.
		chosenArm_right = armRightOptionC;
		armRightOptionC.alpha = 1;

		//return to menu
		showRobotDesignMenu();
	}

	function clearchooseArm_RMenu (){
		// hide arm options
		armRightOptionA.alpha = 0;
		armRightOptionB.alpha = 0;	
		armRightOptionC.alpha = 0;

		chooseArm_RInstructions.alpha = 0;

		invisiarmRightOptionA.inputEnabled = false;
		invisiarmRightOptionB.inputEnabled = false;
		invisiarmRightOptionC.inputEnabled = false;
	}
}

function chooseArm_L(){
	//clears screen
	clearScreen_subsystem();
	armLeftDecision = 0;

	//gives instructions
	let chooseArm_LInstructions = newGame.add.text(0,0, 'woah you want a LEFT arm?', style);
	chooseArm_LInstructions.alpha = 1;

	//displays images of the arm types.
	armLeftOptionA = newGame.add.sprite(0,50, 'arm',1);
	armLeftOptionB = newGame.add.sprite(0,0, 'arm', 2).alignTo(armLeftOptionA, Phaser.BOTTOM_CENTER, 0,10);
	armLeftOptionC = newGame.add.sprite(0,0, 'arm', 3).alignTo(armLeftOptionB, Phaser.BOTTOM_CENTER, 0,10);

	//displays descriptions of the arm types.
	/* descriptions to be added later, but they will be adjacent to the headOptions. 
	    most likely images. */

	// buttons to make arm selections.
	let invisiArmLeftOptionA = newGame.add.button(0,50, 'invisiArmButton', chooseArm_LA);
	invisiArmLeftOptionA.alpha =0;

	let invisiArmLeftOptionB = newGame.add.button(0,0, 'invisiArmButton', chooseArm_LB).alignTo(invisiArmLeftOptionA, Phaser.BOTTOM_CENTER, 0,10);
	invisiArmLeftOptionB.alpha =0;

	let invisiArmLeftOptionC = newGame.add.button(0,0, 'invisiArmButton', chooseArm_LC).alignTo(invisiArmLeftOptionB, Phaser.BOTTOM_CENTER, 0,10);
	invisiArmLeftOptionC.alpha =0;

	// functions assigning head options.
	function chooseArm_LA (){
		armLeftDecision = 1;

		robotGroup.replace(chosenArm_left,armLeftOptionA);
		robotGroup.resetChild(armLeftOptionA, 0,0).alignTo(invisiBody, Phaser.RIGHT_CENTER, 10, 0);

		clearchooseArm_LMenu();

		//reassign chosenArm_left and make the arm visible.
		chosenArm_left = armLeftOptionA;
		armLeftOptionA.alpha = 1;

		//return to menu
		showRobotDesignMenu();
	}

	function chooseArm_LB (){
		armLeftDecision = 2;

		robotGroup.replace(chosenArm_left,armLeftOptionB);
		robotGroup.resetChild(armLeftOptionB, 0,0).alignTo(invisiBody, Phaser.RIGHT_CENTER, 10, 0);

		clearchooseArm_LMenu();

		//reassign chosenArm_left and make the arm visible.
		chosenArm_left = armLeftOptionB;
		armLeftOptionB.alpha = 1;

		//return to menu
		showRobotDesignMenu();
	}

	function chooseArm_LC (){
		armLeftDecision = 3;

		robotGroup.replace(chosenArm_left,armLeftOptionC);
		robotGroup.resetChild(armLeftOptionC, 0,0).alignTo(invisiBody, Phaser.RIGHT_CENTER, 10, 0);

		clearchooseArm_LMenu();

		//reassign chosenArm_left and make the arm visible.
		chosenArm_left = armLeftOptionC;
		armLeftOptionC.alpha = 1;

		//return to menu
		showRobotDesignMenu();
	}

	function clearchooseArm_LMenu (){
		// hide arm options
		armLeftOptionA.alpha = 0;
		armLeftOptionB.alpha = 0;	
		armLeftOptionC.alpha = 0;

		chooseArm_LInstructions.alpha = 0;

		invisiArmLeftOptionA.inputEnabled = false;
		invisiArmLeftOptionB.inputEnabled = false;
		invisiArmLeftOptionC.inputEnabled = false;
	}
}

function chooseWheel(){
	//clears screen
	clearScreen_subsystem();
	wheelDecision = 0;

	//gives instructions
	let chooseWheelInstructions = newGame.add.text(0,0, 'congrats you want wheels', style);
	chooseWheelInstructions.alpha = 1;

	//displays images of the body types.
	wheelOptionA = newGame.add.sprite(0,50, 'wheel',1);
	wheelOptionB = newGame.add.sprite(0,0, 'wheel', 2).alignTo(wheelOptionA, Phaser.BOTTOM_CENTER, 0,10);
	wheelOptionC = newGame.add.sprite(0,0, 'wheel', 3).alignTo(wheelOptionB, Phaser.BOTTOM_CENTER, 0,10);

	//displays descriptions of the body types.
	/* descriptions to be added later, but they will be adjacent to the headOptions. 
	    most likely images. */

	// buttons to make body selections.
	let invisiWheelOptionA = newGame.add.button(0,50, 'invisiWheelButton', chooseWheelA);
	invisiWheelOptionA.alpha =0;

	let invisiWheelOptionB = newGame.add.button(0,0, 'invisiWheelButton', chooseWheelB).alignTo(invisiWheelOptionA, Phaser.BOTTOM_CENTER, 0,10);
	invisiWheelOptionB.alpha =0;

	let invisiWheelOptionC = newGame.add.button(0,0, 'invisiWheelButton', chooseWheelC).alignTo(invisiWheelOptionB, Phaser.BOTTOM_CENTER, 0,10);
	invisiWheelOptionC.alpha =0;

	// functions assigning head options.
	function chooseWheelA (){
		wheelDecision = 1;

		robotGroup.replace(chosenWheel,wheelOptionA);
		robotGroup.resetChild(wheelOptionA, 0,0).alignTo(invisiBody, Phaser.BOTTOM_CENTER, 0,10);

		clearchooseWheelMenu();

		//reassign chosenWheel and make the body visible.
		chosenWheel = wheelOptionA;
		wheelOptionA.alpha = 1;

		//return to menu
		showRobotDesignMenu();
	}

	function chooseWheelB (){
		wheelDecision = 2;

		robotGroup.replace(chosenWheel,wheelOptionB);
		robotGroup.resetChild(wheelOptionB, 0,0).alignTo(invisiBody, Phaser.BOTTOM_CENTER, 0,10);

		clearchooseWheelMenu();

		//reassign chosenWheel and make the body visible.
		chosenWheel = wheelOptionB;
		wheelOptionB.alpha = 1;

		//return to menu
		showRobotDesignMenu();
	}

	function chooseWheelC (){
		wheelDecision = 3;

		robotGroup.replace(chosenWheel,wheelOptionC);
		robotGroup.resetChild(wheelOptionC, 0,0).alignTo(invisiBody, Phaser.BOTTOM_CENTER, 0,10);

		clearchooseWheelMenu();

		//reassign chosenWheel and make the body visible.
		chosenWheel = wheelOptionC;
		wheelOptionC.alpha = 1;

		//return to menu
		showRobotDesignMenu();
	}

	function clearchooseWheelMenu (){
		// hide body options
		wheelOptionA.alpha = 0;
		wheelOptionB.alpha = 0;	
		wheelOptionC.alpha = 0;

		chooseWheelInstructions.alpha = 0;

		invisiWheelOptionA.inputEnabled = false;
		invisiWheelOptionB.inputEnabled = false;
		invisiWheelOptionC.inputEnabled = false;
	}
}

