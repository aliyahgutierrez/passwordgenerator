// // Assignment code here
// var generateBtn = document.querySelector("#generate");

// // Creating Variables that will be used in the prompts 
// var answer;
// var amountNumbers;
// var specialCharacters;
// var upperCase;
// var lowerCase;

// // Numbers 
// var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// // Special characters
// var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// // Upper and lower case letters
// var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// // a variable that will be used to add the various selections/ criteria chosen by user


// // creating the first prompt of questions
// function userPrompts(){

//   // prompts, alerts, and confirm
//   var charLength = parseInt(prompt("How many chracters would you like between 8-126?"));
//   // check the length that the user answers ... conditional (if statement)

// // booleans for other criteria
//   var hasNumbers = confirm("Do you want numbers in your password?");
//   var hasUpper = confirm("Do you want upper case letters in your password?");
//   var hasLower = confirm("Do you want lower case letters in your password?");


// var storageObject = {
//   charLength: charLength,
//   hasNumbers: hasNumbers,
//   hasUpper: hasUpper,
//   hasLower: hasLower
// }

// return storageObject;


// } 

// function randomGen() {
//   var randIndex = Math.floor(Math.random())
// }

// function finalPassword() {
//   var answer = userPrompts(), {
//     if(!charLength);{
//       alert("Required Value");
//     }




// userPrompts();



// first numbers 

// then chracters 

// then upper 

// then lower 

// store the answers somewhere somehow 

// create the for loop 

// a function that randomly selects  charcters and puts them together 

// concacting and pushing the selected arrays to create a random array 


// Assignment code here
var generateBtn = document.querySelector("#generate");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("click")

  // 1. create the series of prompts for
  // - Passowrd length between 8-128 Char 
  // - lower, uppper, numbers, special 
  var charLength = parseInt(prompt("Pick a number between 1-128 for password length?"));
  if (charLength < 8 || charLength > 128) {
    return charLength = parseInt(prompt("Please select a length between 8-128"));
  } else if (charLength < 8 || charLength > 128) {
    return charLength = prompt("Please input correct value");
  }
  console.log("we're getting somewhere")
  
  
  // 2. Validate the input 

  // 3. generate password based on input

  // 4. Display the generated password 



  // this is where the password will be 
  return "Genertated Password will go here"
}

// Write password to the #password input
function writePassword() {
  // this is generating the password
  var password = generatePassword();
  // this is storing the password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
