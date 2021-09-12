
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
 
  //prompt for length
  let length = parseInt(prompt("Choose a password length between 8 and 128 characters."));
  if (length < 8 || length > 128) {
    window.alert("You have not entered a valid number between 8 and 128. Please try again.");
  return generatePassword();
  };

  //too choose which character types to use
  //my properties array

  let typesArr = [];

  if (window.confirm("Would you like to inlude uppercase letters?")){
    typesArr.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  };
  if(window.confirm("Would you like to include lowercase letters?")){
    typesArr.push('abcdefghijklmnopqrstuvwxyz');
  };
  if(window.confirm("Would you like to include numbers?")){
    typesArr.push('0123456789');
  };
  if(window.confirm("Would you like to include symbols?")){
    typesArr.push("!#$%&()+,-./<=>?@[]_{|}~");
  };

    let randomPassword = getRandChar(typesArr, length)
    return randomPassword;
  };
function getRandChar(typesArr, length) {
  let charString;
  let newChar;
  let password = "";
for(i = 0; i < length; i++) {
charString = typesArr[Math.floor(Math.random() * typesArr.length)]
newChar = charString.charAt(Math.floor(Math.random() * charString.length));
password = password + newChar;
}
return password;
};