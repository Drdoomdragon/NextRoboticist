let subsystemState = function () {}

subsystemState.prototype.preload=function(){
	//load json files for the spritesheet; also load texture maps
	newGame.load.atlasJSONHash ('head', 'assets/image/robot_body/heads/heads.png', 'assets/image/robot_body/heads/heads.json');
	newGame.load.atlasJSONHash ('arm', 'assets/image/robot_body/arms/arms.png', 'assets/image/robot_body/arms/arms.json');
	newGame.load.atlasJSONHash ('body', 'assets/image/robot_body/bodies/bodies.png', 'assets/image/robot_body/bodies/bodies.json');
	newGame.load.atlasJSONHash ('wheel', 'assets/image/robot_body/wheels/wheels.png', 'assets/image/robot_body/wheels/wheels.json');

	// invisibleheads.
	newGame.load.image ('invisiHeadButton', 'assets/image/robot_body/heads/transparent_head.png')
	newGame.load.image ('confirmButton', 'assets/image/confirm.png');
}

// variables to choose the head
var chosenHead;
var chosenArm_right;
var chosenArm_left;
var chosenBody;
var chosenWheel;

//variables to act as invisible buttons
var invisiHead;
var invisiWheel;

//groups
var robotGroup;
var mainTextGroup;

//general buttons.
var confirm; // confirm selection

var style;
var textTitle;
var mainInstructionsText;

subsystemState.prototype.create =function(){
	style = { font: "bold 32px Arial", fill: "#F00", boundsAlignH: "center", boundsAlignV: "middle" };
	
	mainTextGroup = newGame.add.group();

	textTitle = newGame.add.text(0, 0, "Build Your Robot", style);
	mainInstructionsText = newGame.add.text(0,40, 'Instructions:', style);

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
	invisiWheel = newGame.add.button();
//confirm button available in case selection is wanted
	confirm = newGame.add.button(0,0, 'confirmButton').alignTo(chosenWheel, Phaser.BOTTOM_CENTER, 0, 50);


}

subsystemState.prototype.update = function(){

}

function clearScreen_subsystem(){
	//making home screen contents disappear
	robotGroup.alpha = 0;
	mainTextGroup.alpha = 0;
	confirm.alpha = 0;

	//disabling homescreen buttons.
	invisiHead.inputEnabled = false;
	confirm.inputEnabled = false;

}

function showRobotDesignMenu(){
	//making home screen contents reappear
	robotGroup.alpha = 1;
	mainTextGroup.alpha = 1;
	confirm.alpha = 1;

	//enabling homescreen buttons.
	invisiHead.inputEnabled = true;
	confirm.inputEnabled = true;
}

/* below are the different functions for each leg part.
	chooseHead - chooses the heads
	chooseLeg - chooses the leg. */
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

function chooseLeg(){
	let chooseLegsInstructions = newGame.add.text(0,0, 'congrats', style);
}

