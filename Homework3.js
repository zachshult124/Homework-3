

var letters = ["a", "b", "c"];



var guessedLetters = []; // This array will hold what we guess
var letterToGuess = undefined; //this is the letter we are trying to guess
var guessesLeft = 9; // the amount of guesses we have left
var wins = 0; //number of wins
var losses = 0; // number of loses


//check if we get it on 1st try
if ( === letterToGuess) {
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    reset();
}

//if you lose function
if (guessesLeft === 0) {
    losses++;
    document.getElementById("#losses").innerHTML = losses;
    reset();
}

// a reset for the game
var reset = function () {
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
};

//get keyboard input function
document.onkeydown = function (event) {
    guessesLeft--;
    guessedLetters.push(event);
};



// we need 3 funtions to update the guesses we make

var updateGuessesLeft = function () {
    document.getElementById("#guessesLeft").innerHTML = guessesLeft;
}; //to write the guesses left to the html

var updateLetterToGuess = function () {
    letterToGuess = letters[Math.floor(Math.random() * 3)];
}; //we create a floor that doesnt go over 3 cause we have 3 possible values (a,b,c)

var updateGuessesSoFar = function () {
    document.getElementById("#guessesSoFar").innerHTML += guessedLetters.concat(, );
}; //concat the used letters




reset() //reset the game after the end

















//notes
    //have to use reset() to start game over and over again
    //edge cases
        //of win immediatlly
        //if lose / out of guesses
    //need input function to log the keys
