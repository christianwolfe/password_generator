


var generateBtn = document.querySelector("#generate");

//empty array to push random password to
var passArray = [];
var password = "";
var finalPassword = [];


//collect parameters from user
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomChar() {
  var chars = "!@#$%^&*(){}[]";
  return chars[Math.floor(Math.random() * chars.length)];
}
//given writePassword func

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password
}
generateBtn.addEventListener("click", writePassword);

//password generator
function generatePassword() {
  var userInput = prompt("Choose number of characters (9-129)");
  if (userInput < 9) {
    alert("Password must contain at least 9 characters.");
  }
  else if (userInput > 129) {

    alert("Password cannot exceed 129 characters.");
  }
  //aceptable number of characters
  if (userInput => 9 && userInput <= 129) {
    var lowerCase = confirm("Are lower case letters required?");
    var upperCase = confirm("Are capital letters required?");
    var specialChar = confirm("Are any special characters required?")
    var numberReq = confirm("Are numbers required?");

    if (lowerCase === true) {
      passArray.push(getRandomLower());

    }
    if (upperCase === true) {
      passArray.push(getRandomUpper());

    } if (specialChar === true) {
      passArray.push(getRandomChar());

    } if (numberReq === true) {
      passArray.push(getRandomNumber());

    }
  }
  // if user does not input a number, recalls genereatePassword()
  else if (isNaN(userInput)) {
    alert("Not a number.");
    generatePassword();
  }


  //loop to add number of characters to password
  for (var i = 0; i < userInput; i++) {
    var randomPass = passArray[Math.floor(Math.random() * passArray.length)];
    console.log(randomPass)

    finalPassword.push(randomPass);

  }
  return finalPassword.join("");
}


//random number generate functions
// charset - http://net-comber.com/charset.html
// (math.floor to round down to whole number (random decimal * limit) + starting point of letter range)

