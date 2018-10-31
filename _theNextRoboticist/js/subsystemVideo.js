let subVideoState = function() {}

subVideoState.prototype.preload= function() {

    newGame.load.video('subsystem_video', 'assets/video/funDance.mp4');
    newGame.load.image('skip', 'assets/image/next.png');

}

var subVideo;

subVideoState.prototype.create =function() {
    subVideo = newGame.add.video('subsystem_video');
	let skipButton = newGame.add.button (0,600, 'skip', pressedMe3);
	subVideo.addToWorld(0,0,0,0,0.5,0.5);
	subVideo.play(false);

	//newGame.time.events.add(Phaser.Timer.SECOND * 16, showButton, this);*/

}

subVideoState.prototype.update = function(){
        // updates rapidly //

    }

/*function showButton() {
	let skipButton = newGame.add.button (0,600, 'skip', pressedMe2);
}
*/function pressedMe3() {
	let style = { font: "bold 32px Arial", fill: "#F00", boundsAlignH: "center", boundsAlignV: "middle" };
	let text = newGame.add.text(0, 700, "phaser 2.4 text bounds", style);
	//subVideo.stop();
	//newGame.state.start("pickProblem");
}