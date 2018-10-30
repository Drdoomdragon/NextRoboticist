/*startState is the title screen of the game. It displays the main picture
and gives the player the option to start the game. no save option available
yet. */
let startState = function() {} // name of state.

startState.prototype.preload = function()
	{
		// preload image files //
		newGame.load.image ('test', 'assets/image/officemax_simple_preview.png');
		newGame.load.image ('testStartButton', 'assets/image/begin.png');
	}

/* Loads the background and creates the start button */
startState.prototype.create =function()
	{
		newGame.background = newGame.add.sprite(0,0, 'test');
		let startButton = newGame.add.button (300, 200, 'testStartButton', pressedMe);
			
	}

startState.prototype.update = function(){
		// updates rapidly //

	}

// If the button is pressed, the introduction video plays.

function pressedMe() {
	/*let style = { font: "bold 32px Arial", fill: "#F00", boundsAlignH: "center", boundsAlignV: "middle" };
	let text = newGame.add.text(0, 0, "phaser 2.4 text bounds", style);*/
	newGame.state.start("introScene");
}