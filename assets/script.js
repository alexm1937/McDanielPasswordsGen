// Assignment Code
// Write password to the #password inpu
//generator functions
const resultEl

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol(){
   const symbols = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';
   return symbols [Math.floor(Math.random() * symbols.length)] ;
}


var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  };
//pass info


function generatePassword () {
    var password = '';
    str = 'abcdefghijklmnopqrstuvwxyz0123456789';
    for (i = 0; i <= length; i++) {
    var password = Math.floor(Math.random() * passLength() + 1);
    password += str.charAt(str)
  }
};


