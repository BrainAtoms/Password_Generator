// Assignment code here
function writePassword() {
  var password = generatePassword() 
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  }

  askUser = function () {
    var userChoice = window.prompt ("How many characters would you like your password to contain? (Max=12, Min=8)") 
    if (!userChoice) {
      return; 
    } 
    {
    window.confirm ("Click OK to confirm including special characters.")
    window.confirm ("Click OK to confirm including numeric characters.")
    window.confirm ("Click OK to confirm including lowercase characters.")
    window.confirm ("Click OK to confirm including uppercase characters.")
  }
  writePassword()
  }

// Add event listener to generate button
generateBtn.addEventListener("click", askUser, writePassword);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  chars = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';
  var passwordLength = 12; 
  var password = "";
  for (i = 0; i< passwordLength; i++) {
    var randomNumer = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumer, randomNumer + 1);
  }

  document.getElementById("password").value = password;

  generatePassword()
} 

// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// Write password to the #password input







