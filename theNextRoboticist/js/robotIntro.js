let introState = function() {}

introState.prototype.preload= function() {

    newGame.load.video('introductory_video', 'assets/video/chant.mp4');
    newGame.load.image('skip', 'assets/image/next.png');

}

introState.prototype.create =function() {

    let introVideo = newGame.add.video('introductory_video');
    //  x, y, anchor x, anchor y, scale x, scale y
    introVideo.addToWorld(0,0,0,0,0.5,0.5);
    introVideo.play(false);

}

introState.prototype.update = function(){
        // updates rapidly //

    }
