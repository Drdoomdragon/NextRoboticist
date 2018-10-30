let problemState  = function(){};

problemState.prototype.preload= function() {

    newGame.load.image('artOption', 'assets/image/art.png');
    newGame.load.image('playOption', 'assets/image/play.png');	
    newGame.load.image('sportsOption', 'assets/image/sports.png');
    newGame.load.image('backButton', 'assets/image/back.png');
    newGame.load.image('selectButton', 'assets/image/select.png');

}

var artButton

problemState.prototype.create =function() {
	artButton = newGame.add.button (0, 200, 'artOption', artPicked);

/*	let playButton = newGame.add.button (300,200, 'playOption', problemState.buttonPressed);

	let sportsButton = newGame.add.button(600, 200, 'sportsOption', problemState.buttonPressed);
*/
}

problemState.prototype.update = function(){
        // updates rapidly //

    }

function displayOptions(){
    let backOption = newGame.add.button (0,400, 'backButton');
    let selectOption = newGame.add.button (500,400, 'selectButton');
}

function artPicked(){
    let style = { font: "bold 32px Arial", fill: "#F00", boundsAlignH: "center", boundsAlignV: "middle" };
    let text = newGame.add.text(0, 0, "phaser 2.4 text bounds", style);  
    artButton.destroy();
    displayOptions(); 
}

