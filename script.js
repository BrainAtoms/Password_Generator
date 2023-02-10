// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Obtains user input and creates a password according to their specifications
function writePassword() {
  var userChoice = window.prompt(
    "How many characters would you like your password to contain? (Max=15, Min=8)"
  );
  if (!userChoice) {
    return;
  }
  // returns to home screen if user fails to select a number
  if (isNaN(userChoice)) {
   window.alert("You must enter a number.");
   return; 
  }
  // sets limits for user's password length
  if (userChoice < 8) {
    window.alert("That number is too low.");
    return;
  }
  if (userChoice > 15) {
    window.alert("That number is too high"); 
    return; 
  }
  // asks user's preferences for desired password and only adds confirmed characters
  var chars = "";
  var specialChar = window.confirm(
    "Click OK to confirm including special characters."
  );
  if (specialChar) {
    chars += ` !"#$%&'()*+,-./:;<=>?@[\]^_{|}~`;
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
  // returns user to home screen if no character type is chosen
  if (!specialChar && !numChar && !lowChar && !uppChar) {
    window.alert("You must select at least one character type");
    return;
  }
  // creates random password according to previous user inputs and stores into a password variable
  {
    var passwordLength = userChoice;
    var password = "";
    for (i = 0; i < passwordLength; i++) {
      var randomNumer = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumer, randomNumer + 1);
    }
  }
// value of the password id becomes what is stored into password variable 
  document.getElementById("password").value = password;
}

// Add event listener to generate button
//displays password in HTML textarea when generate button is clicked
generateBtn.addEventListener("click", writePassword);
