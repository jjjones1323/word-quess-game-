var computerChoices = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

var wins = 0;
var losses = 0;
var numguess = 9;
var guessChoices = [];
// This is how you grab and html element with vanilla javascript//
var computerGuessHTML = document.getElementById("computerGuess");
// This is how you grab and Html Element with jquery//
var userGuessHTML = $("#userGuess");

document.onkeyup = function(event) {
  var userGuess = event.key;
  userGuessHTML.html(userGuess);
  var computerGuess =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("numguess").innerHTML = numguess;
  if (userGuess === computerGuess) {
    wins++;
    numguess = 9;
    guessChoices = [];
  } else if (userGuess != computerGuess) {
    numguess--;
    guessChoices.push(userGuess);
    if (numguess === 0) {
      console.log("im here");
      numguess = 9;
      losses++;
      guessChoices = [];
    }
  }
};
