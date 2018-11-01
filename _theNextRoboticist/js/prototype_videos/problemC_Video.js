let prototypeQuestionC_State = function() {}

prototypeQuestionC_State.prototype.preload= function() {

    newGame.load.video('protoC_Vid', 'assets/video/georgia.mp4');
    newGame.load.image('confirm', 'assets/image/confirm.png');
    newGame.load.image ('back', 'assets/image/back.png');

}

var subVideo_QC;

prototypeQuestionC_State.prototype.create =function() {
    subVideo_QC = newGame.add.video('protoC_Vid');
	let confirmButton = newGame.add.button (0,600, 'confirm', confirm_prototype);
	let backButton = newGame.add.button(600, 600, 'back', deny_prototype);
	subVideo_QC.addToWorld(0,0,0,0,0.5,0.5);
	subVideo_QC.play(false);

	//newGame.time.events.add(Phaser.Timer.SECOND * 16, showButton, this);*/

}

prototypeQuestionC_State.prototype.update = function(){
        // updates rapidly //

    }

/*function showButton() {
	let skipButton = newGame.add.button (0,600, 'skip', pressedMe2);
}
*/function confirm_prototype() {
	let style = { font: "bold 32px Arial", fill: "#F00", boundsAlignH: "center", boundsAlignV: "middle" };
	let text = newGame.add.text(0, 700, "you gucci", style);
	/*subVideo_QC.stop();
	newGame.state.start("subsystemScene");*/
}

function deny_prototype(){	
	let style = { font: "bold 32px Arial", fill: "#F00", boundsAlignH: "center", boundsAlignV: "middle" };
	let text = newGame.add.text(0, 700, "you ain't gucci", style);
}