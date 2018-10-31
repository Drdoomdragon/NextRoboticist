let subsystemState = function () {}

subsystemState.prototype.preload=function(){
	//load json files for the spritesheet; also load texture maps
	newGame.load.atlasJSONHash ('head', 'assets/image/robot_body/heads/heads.png', 'assets/image/robot_body/heads/heads.json');
	newGame.load.atlasJSONHash ('arm', 'assets/image/robot_body/arms/arms.png', 'assets/image/robot_body/arms/arms.json');
	newGame.load.atlasJSONHash ('body', 'assets/image/robot_body/bodies/bodies.png', 'assets/image/robot_body/bodies/bodies.json');
	newGame.load.atlasJSONHash ('wheel', 'assets/image/robot_body/wheels/wheels.png', 'assets/image/robot_body/wheels/wheels.json');

	newGame.load.image ('confirmButton', 'assets/image/confirm.png');
}

// variables to choose the head
var chosenHead;
var chosenArm_right;
var chosenArm_left;
var chosenBody;
var chosenWheel;

subsystemState.prototype.create =function(){
	/*headOptionA = newGame.add.sprite(0,0, 'head',1);
	headOptionB = newGame.add.sprite(0,100, 'head', 2);
	headOptionC = newGame.add.sprite(0,200, 'head', 3);
	headOptionNull = newGame.add.sprite(0,300, 'head', 0);*/
	let style = { font: "bold 32px Arial", fill: "#F00", boundsAlignH: "center", boundsAlignV: "middle" };
	let textTitle = newGame.add.text(0, 0, "Build Your Robot", style);
	let mainInstructionsText = newGame.add.text(0,40, 'Instructions:', style);

// MAKING THE ROBLOX CHARACTER
	chosenHead = newGame.add.sprite(250,100, 'head', 0);
	chosenBody = newGame.add.sprite(0,0, 'body',0).alignTo(chosenHead, Phaser.BOTTOM_CENTER, 0, 10);
	chosenArm_right = newGame.add.sprite(0,0, 'arm', 0).alignTo(chosenBody, Phaser.LEFT_CENTER, -20,0);
	chosenArm_left = newGame.add.sprite(0,0, 'arm', 0).alignTo(chosenBody, Phaser.RIGHT_CENTER, 10, 0);
	chosenWheel = newGame.add.sprite(0, 0, 'wheel', 0).alignTo(chosenBody, Phaser.BOTTOM_CENTER, 0,10);

//confirm button available in case selection is wanted
	let confirm = newGame.add.button(0,0, 'confirmButton').alignTo(chosenWheel, Phaser.BOTTOM_CENTER, 0, 50);


}

subsystemState.prototype.update = function(){

}