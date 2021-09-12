function getSym = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var chars = 

var passlength = function() {
  var length = window.prompt("Choose a password length between 8 and 128 characters.");
  if (isNaN(length)) {
    window.alert("You have not entered a valid number.");
    return passlength();
  }
  length = parseInt(length);
  if (length < 8 || length > 128 || length == lowercase || length === uppercase) {
    window.alert("You have not entered a valid number between 8 and 128. Please try again.");
    return passlength();
  }
}

var letters = function() {
  var upper = window.confirm("Would you like to include uppercase characters?")
  if (confirm) {
    upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  else {
    upper = "";
  }
  var lower = window.confirm("Would you like to include lowercase characters?");
  if (confirm) {
    lower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  }
  else {
    lower = "";
  }
  this.char = upper,lower; 
};



// Assignment Code
var generateBtn = document.querySelector("#generate");


//prompts for critera
//prompt for length 8-128 should be valid
//confirm if they want: lowercase, uppercase, numeric or special


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var pass = "";
  var length = passlength();
  var str = chars;
  for (i = 1; i <= 8; i++) {
    var char  = Math.floor(Math.random() * length + 1);
    pass += str.letters(char)
}
return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);