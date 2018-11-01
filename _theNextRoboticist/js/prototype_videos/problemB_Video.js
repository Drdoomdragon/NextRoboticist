let prototypeQuestionB_State = function() {}

prototypeQuestionB_State.prototype.preload= function() {

    newGame.load.video('protoB_Vid', 'assets/video/chant.mp4');
    newGame.load.image('confirm', 'assets/image/confirm.png');
    newGame.load.image ('back', 'assets/image/back.png');

}

var subVideo_QB;

prototypeQuestionB_State.prototype.create =function() {
    subVideo_QB = newGame.add.video('protoB_Vid');	
    let confirmButton = newGame.add.button (0,600, 'confirm', confirm_prototype);
	let backButton = newGame.add.button(600, 600, 'back', deny_prototype);
	subVideo_QB.addToWorld(0,0,0,0,0.5,0.5);
	subVideo_QB.play(false);

	//newGame.time.events.add(Phaser.Timer.SECOND * 16, showButton, this);*/

}

prototypeQuestionB_State.prototype.update = function(){
        // updates rapidly //

    }

/*function showButton() {
	let skipButton = newGame.add.button (0,600, 'skip', pressedMe2);
}
*/function confirm_prototype() {
	let style = { font: "bold 32px Arial", fill: "#F00", boundsAlignH: "center", boundsAlignV: "middle" };
	let text = newGame.add.text(0, 700, "you gucci", style);
	/*subVideo_QB.stop();
	newGame.state.start("subsystemScene");*/
}

function deny_prototype(){	
	let style = { font: "bold 32px Arial", fill: "#F00", boundsAlignH: "center", boundsAlignV: "middle" };
	let text = newGame.add.text(0, 700, "you ain't gucci", style);
}