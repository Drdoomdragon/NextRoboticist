let introState = function() {}

introState.prototype.preload= function() {

    newGame.load.video('introductory_video', 'assets/video/chant.mp4');
    newGame.load.image('skip', 'assets/image/next.png');

}

var introVideo;

introState.prototype.create =function() {
    introVideo = newGame.add.video('introductory_video');
	let skipButton = newGame.add.button (0,500, 'skip', pressedMe2);
	introVideo.play(false);

}

introState.prototype.update = function(){
        // updates rapidly //

    }

function pressedMe2() {
	/*let style = { font: "bold 32px Arial", fill: "#F00", boundsAlignH: "center", boundsAlignV: "middle" };
	let text = newGame.add.text(0, 700, "phaser 2.4 text bounds", style);*/
	introVideo.stop();
	newGame.state.start("pickProblem");
}