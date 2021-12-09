// Assignment Code
var generateBtn = document.querySelector("#generate");
// Ugly arrays. Having them separated with quotes and commas caused issues with the password generator.

// var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
// var numbers = ["1","2","3","4","5","6","7","8","9","0"];
var numbers = ["1234567890"];
// var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
// var spcl = ["~","!","@","#","$","%","^","&","*","(",")","_","+","=","-"];
var spcl = ["~!@#$%^&*()_+-="]
var result = [];

// Write password to the #password input
generateBtn.addEventListener("click", generatePassword);
function generatePassword() {
  // Password length prompt
  let passwordLength = prompt("Please enter between 8 and 128 characters");

  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    window.alert(
      "Invalid length.Please ensure you password is between 8 and 128 characters"
    );
    generatePassword();
  }
  // Lowercase prompt
  let lower = confirm("Would you like to add lowercase characters?");
  if (lower === true) {
    // result += lowercase[4];
    result += lowercase;
    console.log("result at lowercase: " + result)
  } else if (lower === false) {
    result;
  }
  // Uppercase prompt
  let upper = confirm("Would you like to add uppercase characters?");
  if (upper === true) {
    result += uppercase;
  } else if (upper === false) {
    result;
  }
  // Numbers prompt
  let num = confirm("Would you like to add numbers?");
  if (num === true) {
    result += numbers;
  } else if (num === false) {
    result;
  }
  // Special characters prompt
  let special = confirm(
    "Would you like to use special characters? (!,#,$,@,%..)"
  );
  if (special === true) {
    result += spcl;
  } else if (special === false) {
    result;
  }
  // Math logic so it actually spits out a password. 
  // also, I don't think the for loop does anything
  let writePassword = "";
  // console.log("result: " + result);
  for (let i = 0; i < passwordLength; i++) {
    writePassword += result[Math.floor(Math.random() * result.length)];
    console.log(Math.floor(Math.random() * result.length));
    console.log(writePassword);
  }

  let showPassword = confirm(writePassword);

  // This code breaks the program somehow but I haven't figured out how so I don't want to delete it yet

  // return writePassword;
  // function writePassword() {
  //   var password = generatePassword();
  //   var passwordText = document.querySelector("#password");
  //   return;
  //   passwordText.value = password;
  // }

  // Add event listener to generate button
  // generateBtn.addEventListener("click", showPassword);
}
