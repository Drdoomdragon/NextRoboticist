let subsystemState = function () {}

subsystemState.prototype.preload=function(){
	newGame.load.atlasJSONHash ('head', 'assets/image/robot_body/heads/heads.png', 'assets/image/robot_body/heads/heads.json');
}

subsystemState.prototype.create =function(){
	headOptionA = newGame.add.sprite(0,0, 'head',1);
	headOptionB = newGame.add.sprite(0,100, 'head', 2);
	headOptionC = newGame.add.sprite(0,200, 'head', 3);

}

subsystemState.prototype.update = function(){

}