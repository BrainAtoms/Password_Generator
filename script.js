// Assignment code here
chars = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

// askUser = function () {
//   var userChoice = window.prompt ("How many characters would you like your password to contain? (Max=12, Min=8)") 
//   if (!userChoice) {
//     return 
//   } 
//   {
//   var specialChar = window.confirm ("Click OK to confirm including special characters.")
//   if (!specialChar) {chars= '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'}
//   var numChar = window.confirm ("Click OK to confirm including numeric characters.")
//   if (!numChar) { chars= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'}
//   var lowChar = window.confirm ("Click OK to confirm including lowercase characters.")
//   if (!lowChar) {chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'}
//   var uppChar = window.confirm ("Click OK to confirm including uppercase characters.")
//   if (!uppChar) {chars = '0123456789abcdefghijklmnopqrstuvwxyz'}
//   else {chars = ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';}
// }
// writePassword()
// }

// Add event listener to generate button

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {


var userChoice = window.prompt ("How many characters would you like your password to contain? (Max=12, Min=8)"); 
if (!userChoice) {
  return } else 
var specialChar = window.confirm ("Click OK to confirm including special characters.");
var numChar = window.confirm ("Click OK to confirm including numeric characters.")
var lowChar = window.confirm ("Click OK to confirm including lowercase characters.")
var uppChar = window.confirm ("Click OK to confirm including uppercase characters.")
  {
  var passwordLength = userChoice;
  var password = "";
  for (i = 0; i< passwordLength; i++) {
    var randomNumer = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumer, randomNumer + 1);
  } }

  document.getElementById("password").value = password;
    }

function writePassword() {
  var password = generatePassword(); 
  }


generateBtn.addEventListener("click", writePassword);



// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// Write password to the #password input







