let introState = function() {}

introState.prototype.preload= function() {

    newGame.load.video('introductory_video', 'assets/video/chant.mp4');
    newGame.load.image('skip', 'assets/image/next.png');

}

var introVideo;

introState.prototype.create =function() {
    introVideo = newGame.add.video('introductory_video');

	introVideo.addToWorld(0,0,0,0,0.5,0.5);
	introVideo.play(false);

	newGame.time.events.add(Phaser.Timer.SECOND * 16, showButton, this);

}

introState.prototype.update = function(){
        // updates rapidly //

    }

function showButton() {
	let skipButton = newGame.add.button (0,600, 'skip', pressedMe2);
}
function pressedMe2() {
	/*let style = { font: "bold 32px Arial", fill: "#F00", boundsAlignH: "center", boundsAlignV: "middle" };
	let text = newGame.add.text(0, 700, "phaser 2.4 text bounds", style);*/
	introVideo.stop();
	newGame.state.start("pickProblem");
}