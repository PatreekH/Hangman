//Hangman Game by Patrick Hernandez

//"If it looks stupid but it works, it ain't stupid."
//									-Murphy's laws of military combat

//I had trouble 'console.log'ing when my entire game was formatted to be inside my object and therefore it was hard for me to see if my code was actually working or not. Because of this I just decided to format it outside of the object. Any suggestions for how to check if my code is working while its inside the object?

var game = {
	answerKey: ['red', 'blue', 'green', 'purple', 'yellow', 'orange'],
	fullWord: "",
	dashes: [],
	guessedLetters: [],
	guessesLeft: 6,
	wins: 0,
	loss: 0
}


var gl = game.guessesLeft;
var space = $("#wordspot");
var displaySpaces = $("<div>");
var userWins = game.wins
var userLose = game.loss

//picks a random word from answerKey
function randWord(obj) {
	game.fullWord = game.answerKey[Math.floor(Math.random() * game.answerKey.length)];
}	

//creates dashes the same length as the word picked from randWord
function emptyWord(obj) {
	for (var i = 0; i < game.fullWord.length; i++) {
		game.dashes.push("_  ");
	}
}

//runs functions
randWord();
emptyWord();

//displays dashes and spaces
$(displaySpaces).html(game.dashes);
$(space).append(displaySpaces);

//displays guesses left and times lost counter
$("#guessLeft").html(gl)
$("#timesLost").html(userLose)

//After getting one or more guesses correct, for some reason you will have 1 "free" guess to get an answer wrong before it actually takes away on the counter. This seems to only happen after guessing correctly, followed by a letter that is incorrect. ie: if you choose a correct letter, guessesLeft counter stays the same, but then choose a wrong letter and nothing will happen until you choose another wrong letter, only after the second incorrect guess will the game begin subtracting in guessesLeft. The same thing happens when going from wrong to right as well, the first guess that is correct after being wrong will subract from the counter when it is supposed to stay the same. If you watch the counter in browser and variate between incorrect to corret guesses you will see what I'm talking about. I tried for hours to get it to work and couldn't figure out where I went wrong.
         
 document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    game.guessedLetters.push(userGuess);
    $("#lettersguessed").html(game.guessedLetters);

    for (var i = 0; i < game.fullWord.length; i++) {
    	if (userGuess == game.fullWord.charAt([i])) {
        	game.dashes[i] = userGuess + "  ";
        	$(displaySpaces).html(game.dashes);
    	} 
	}



function wrongWord(obj) {
	$("#guessLeft").html(gl)
	$("#timesLost").html(userLose)
		if (game.fullWord.indexOf(userGuess) < 0){
			gl--;
		}

		if (gl <= 0) {
			userLose++
			reset();
		}	
	}

wrongWord();

}

//Doesn't display new word until letter in new word is selected, everything else resets fine.
function reset(obj){
	game.fullWord = "";
	game.dashes = [];
	game.guessedLetters = [];
	gl = 6;
	randWord();
	emptyWord();
	wrongWord();
	$(displaySpaces).html(game.dashes);
}

//Doesn't work (yet)
function win(obj) {
	$("#timesWon").html(game.wins)
	for (var i = 0; i < game.fullWord.length; i++){
		if (game.dashes.firstChild(0) == game.fullWord.charAt[i]) {
			userWins++
			reset();
		}

	}

}

win();


//Copyright Patrick Hernandez