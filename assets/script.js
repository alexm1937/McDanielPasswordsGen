
// Assignment Code
// Elements to generate interaction with hTML
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


// Writes password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//generates password after prompting for criteria
function generatePassword() {
  let generatedPassword = "";
  const number = getRandomNumber();
  const upper = getRandomUpper();
  const lower = getRandomLower();
  const symbol = getRandomSymbol();
  //prompt for length
  let length = parseInt(prompt("Choose a password length between 8 and 128 characters."));
  if (length < 8 || length > 128) {
    window.alert("You have not entered a valid number between 8 and 128. Please try again.");
  return generatePassword();
  };

  //too choose which character types to use
  let typesArr = [];
  if (window.confirm("Would you like to inlude uppercase letters?")){
    typesArr.push({upper});
  };
  if(window.confirm("Would you like to include lowercase letters?")){
    typesArr.push({lower});
  };
  if(window.confirm("Would you like to include numbers?")){
    typesArr.push({number});
  };
  if(window.confirm("Would you like to include symbols?")){
    typesArr.push({symbol})
  };

debugger;
  for (let i = 0; i < length; i++) {
    typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += 
    });
  };
  debugger;
  var finalPassword = generatedPassword;
  document.getElementById("password")
  return ("password").innerHTML = finalPassword;
}

 //if  'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
// Add event listener to generate button



//function to prompt for length
//var passChar = function(){}
    

  //rand funcs, not mine
//const randomFunc = {
  //  lower: getRandomLower,
    //upper: getRandomUpper,
    //number: getRandomNumber,
    //symbol: getRandomSymbol
//};

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
};
function getRandomSymbol(){
   const symbols = '!#$%&()*+,-./:;<=>?@[\]^_{|}~';
   return symbols [Math.floor(Math.random() * symbols.length)] ;
};
