let problemState  = function(){};

problemState.prototype.preload= function() {

    newGame.load.image('artOption', 'assets/image/art.png');
    newGame.load.image('playOption', 'assets/image/play.png');	
    newGame.load.image('sportsOption', 'assets/image/sports.png');
    newGame.load.image('backButton', 'assets/image/back.png');
    newGame.load.image('selectButton', 'assets/image/select.png');

}

// global variables
var artButton
var playButton

var backOption
var selectOption

var text
var scoreText
var style


problemState.prototype.create =function() {
    problemDecision = 0;
    style = { font: "bold 32px Arial", fill: "#F00", boundsAlignH: "center", boundsAlignV: "middle" };
    text = newGame.add.text(0, 0, "Choose your problem!", style);  
    artButton = newGame.add.button (0, 200, 'artOption', artPicked);
    playButton = newGame.add.button (300,200, 'playOption', playPicked);
    sportsButton = newGame.add.button(600, 200, 'sportsOption', sportsPicked);

}

problemState.prototype.update = function(){
        // updates rapidly //

    }

// this is the main menu screen.
function mainScreen (){
    problemDecision = 0;
    text.destroy();
    scoreText.destroy();
    backOption.destroy();
    selectOption.destroy();

    text = newGame.add.text(0, 0, "Choose your problem!", style); 
    artButton = newGame.add.button (0, 200, 'artOption', artPicked);
    playButton = newGame.add.button (300,200, 'playOption', playPicked);
    sportsButton = newGame.add.button(600, 200, 'sportsOption', sportsPicked);
}

//this gives the option for player to select challenge or select a new one.
function displayOptions(){
    artButton.destroy();
    playButton.destroy();
    sportsButton.destroy();
    backOption = newGame.add.button (0,400, 'backButton', mainScreen);
    selectOption = newGame.add.button (500,400, 'selectButton', selectProblem);
    
    scoreText = newGame.add.text (0,100, problemDecision, style);
}

function selectProblem (){
    newGame.state.start ("playSubVideo");
}
//gives details on the art problem challenge
function artPicked(){
    text.destroy();
    text = newGame.add.text(0, 0, "you chose art!", style);  
    problemDecision = 1;
    displayOptions(); 
}

//gives details on the play problem challenge
function playPicked(){
    text.destroy();
    text = newGame.add.text(0, 0, "you chose play!", style);  
    problemDecision = 2;
    displayOptions(); 
}

//gives details on the sports problem challenge
function sportsPicked(){
    text.destroy();
    text = newGame.add.text(0, 0, "you chose sports!", style);  
    problemDecision = 3;
    displayOptions(); 
}
