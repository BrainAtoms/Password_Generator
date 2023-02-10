// Assignment code here
characters =
  " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

// askUser = function () {
//   var userChoice = window.prompt ("How many characters would you like your password to contain? (Max=12, Min=8)")
//   if (!userChoice) {
//     return
//   }
//   {
//   var specialChar = window.confirm ("Click OK to confirm including special characters.")
// if (!specialChar) {chars= '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'}
//   var numChar = window.confirm ("Click OK to confirm including numeric characters.")
// if (!numChar) { chars= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'}
//   var lowChar = window.confirm ("Click OK to confirm including lowercase characters.")
// if (!lowChar) {chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'}
//   var uppChar = window.confirm ("Click OK to confirm including uppercase characters.")
// if (!uppChar) {chars = '0123456789abcdefghijklmnopqrstuvwxyz'}
// else {chars = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';}
// }
// writePassword()
// }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userChoice = window.prompt(
    "How many characters would you like your password to contain? (Max=12, Min=8)"
  );
  if (!userChoice) {
    return;
  } 
  var chars = "";
  var specialChar = window.confirm(
    "Click OK to confirm including special characters."
  );
  if (specialChar) {
    chars += ` !"#$%&\'()*+,-./0123456789:;<=>?@`;
  }
  var numChar = window.confirm(
    "Click OK to confirm including numeric characters."
  );
  if (numChar) {
    chars += "0123456789";
  }
  var lowChar = window.confirm(
    "Click OK to confirm including lowercase characters."
  );
  if (lowChar) {
    chars += "abcdefghijklmnopqrstuvwxyz";
  }
  var uppChar = window.confirm(
    "Click OK to confirm including uppercase characters."
  );
  if (uppChar) {
    chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  {
    var passwordLength = userChoice;
    var password = "";
    for (i = 0; i < passwordLength; i++) {
      var randomNumer = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumer, randomNumer + 1);
    }
  }

  document.getElementById("password").value = password;
}

function writePassword() {
  var password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// Write password to the #password input
