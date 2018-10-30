let introState = function() {}

introState.prototype.preload= function() {

    //newGame.load.video('introductory_video', 'assets/video/chant.mp4');
    newGame.load.image('skip', 'assets/image/next.png');

}

introState.prototype.create =function() {
	let skipButton = newGame.add.button (0,0, 'skip', pressedMe2);
   /* let introVideo = newGame.add.video('introductory_video');
    introVideo.play(false);
    if (introVideo.complete(true))
    	{	//introVideo.removeVideoElement();
    		pressedMe2()};*/

}

introState.prototype.update = function(){
        // updates rapidly //

    }

function pressedMe2() {
	let style = { font: "bold 32px Arial", fill: "#F00", boundsAlignH: "center", boundsAlignV: "middle" };
	let text = newGame.add.text(0, 300, "phaser 2.4 text bounds", style);
	
}