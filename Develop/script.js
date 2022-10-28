

// Assignment code here
var generateBtn = document.querySelector("#generate");

// Creating Variables that will be used in the prompts 
var amountNumbers;
var specialCharacters;
var upperCase;
var lowerCase;
var answer;

var passwordArr = []
var availableChar = []

// Numbers 
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
// Special characters
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Upper 
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// lower
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// a variable that will be used to add the various selections/ criteria chosen by use

function getChar() {
  amountNumbers = confirm("Will this contain Numbers?");
  console.log(" numbers " + number)

  specialCharacters = confirm("will this contain special characters?");
  console.log("special characters " + character)


  upperCase = confirm("Will this contain upper case letters?");
  console.log("upper case " + upperLetters)


  lowerCase = confirm("Will this contain lower? ");
  console.log("lower case " + lowerLetters)


}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("click")

  // 1. create the series of prompts for
  // - Passowrd length between 8-128 Char 
  // - lower, uppper, numbers, special 

  // have and outter var for input after getting password length 


  // Seires of Prompts 

  // Password Length 
  var charLength = parseInt(prompt("Pick a number between 8-128 for password length?"));
  while (charLength < 8 || charLength > 128) {
    charLength = parseInt(prompt("Please select a length between 8-128"));
  }

  while (true) {
    getChar();
    console.log(amountNumbers, specialCharacters, upperCase, lowerCase)

    if (amountNumbers || specialCharacters || upperCase || lowerCase) {
      break
    } else {
      alert("Please input correct value")
    }
  }

  console.log(amountNumbers, specialCharacters, upperCase, lowerCase)




  // return charLength = alert("Please input correct value")

 {
    if (amountNumbers) {
    var randomNumber = " y";
    passwordArr.push(randomNumber);
    answer ++;
    availableChar.concat(number)
    }
    if (specialCharacters) {
      var randomCharacters = "*";
      passwordArr.push(randomCharacters);
      answer++;
      availableChar.concat(character)
    }
    if (upperCase) {
      var upperWord = "w";
      passwordArr.push(upperWord);
      answer++;
      availableChar.concat(upperLetters)

    }
    if (lowerCase) {
      var randomLower = "x"
      passwordArr.push(randomLower);
      answer++;
      availableChar.concat(lowerLetters);

    }

    for (i = 0; i < passwordArr - answer; i++) {
      var genChar = '@';
      passwordArr.push(genChar);

      console.log(answer);
    }
  }
}
//  insure one of each is requested type is in the paswword   
//  check if amount numbers is true 
// if true get reandom number 
// push random number to password array type
// reduce password length by one ( represent remainding characters needed for password)

//  check if amount specialChar  is true 
// if true get reandom specialChar 
// push specialChar number to password array type
// reduce password length by one ( represent remainding characters needed for password)

//  check if amount upper is true 
// if true get reandom upper 
// push random upper to password array type
// reduce password length by one ( represent remainding characters needed for password)

//  check if amount lower is true 
// if true get reandom lower 
// push random lower to password array type
// reduce password length by one ( represent remainding characters needed for password)

// create for loop to get the random char for reaminding password length 
//  for(i = 0; i < charLength; i++){
//   console.log("tacos")
//  }



// remaining of length of the password were going to loop and get random charcters add it to the passowrd list




// 3. generate password based on input

// 4. Display the generated password 


// this is where the password will be 
//   return "Genertated Password will go here"
// 

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
