var userSelectedCharacters = [];
var generateBtn = document.querySelector("#generate");
var characterAmountRange = document.querySelector("characterAmountRange")
var characterAmountNumber = document.querySelector("characterAmountNumber")
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbols = ["!", "@", "#", "$", "%", "&", "^", "*",]
var possibleCharacters = []
var password
console.log("Hello")
// document.querySelector("password")



// function writePassword() {
//   console.log("Confirm")
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");


// }


function generatePassword() {
  console.log("Confirm Click")

  // var password = getPassword()
  for (var i = 0; i <= userSelectedCharacters; i++) {
    Math.floor(Math.random() * possibleCharacters.length);
    password += possibleCharacters[randomNum];
    console.log(password)




    // length of for loop needs to be choice of password.


    // 
    // return
    // var randomNum = Math.floor(Math.random() * userSelectedCharacters.length);


    // password += userSelectedCharacters[randomNum];
    // console.log("password")

  }

  // randomly selects a character from that variable and pushes that character to a brand new global variable.
  // global variable will be randomized password.
  // 
}


function getPassword() {
  var lengths = prompt("How long of a password do you want?")
  var lowerCaseConfirm = confirm("Do you want lowercase letters?")

  if (lowerCaseConfirm) {
    userSelectedCharacters += lowerCase
  }

  var upperCaseConfirm = confirm("Do you want UPPERCASE letters?")
  if (upperCaseConfirm) {
    userSelectedCharacters += upperCase
  }
  console.log("confirmPass")

  var numbersConfirm = confirm("Do you want numb3r5?")
  if (numbersConfirm) {
    userSelectedCharacters += numbers
  }
  var symbolsConfirm = confirm("Do you want symb*!s?")
  if (symbolsConfirm) {
    userSelectedCharacters += symbols
  }
  // var options = {
  //   lengths: lengths,
  //   lowerCase: lowerCase,
  //   upperCase: upperCase,
  //   numbers: numbers,
  //   symbols: symbols,
  // } 
  generatePassword();
}
//   var randomNum = Math.floor(Math.random() * userSelectedCharacters.length);
// // password += userSelectedCharacters[randomNum];}






// Add event listener to generate button
generateBtn.addEventListener("click", getPassword());
// passwordDisplay.innerText = password

