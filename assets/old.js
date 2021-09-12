//var sym = '!#$%&()*+,-./:;<=>?@[\]^_`{|}~';
//var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//var num = '0123456789';

var passlength = function(){  
  let passlength = Number(prompt("Choose a password length between 8 and 128 characters."));
    if (Number < 8 || Number > 128) {
      window.alert("You have not entered a valid number between 8 and 128. Please try again.");
    return passlength(); 
    }
  };

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var pass = "";
  var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var length = passlength();    
  for (i = 1; i <= length; i++) {
    var char  = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char)
}
}
 //if  'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function passLength() {
  var length = window.prompt("Please choose a password length between 8 and 128 characters.");
  if (length <= 7 || length >= 129) {
      window.alert("You have not entered a valid number between 8 and 128. Please try again.");
  return passLength();
  }
}