// Assignment Code
var generateBtn = document.querySelector("#generate");
// Ugly arrays. Having them separated with quotes and commas caused issues with the password generator.
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = ["1234567890"];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var spcl = ["~!@#$%^&*()_+="];
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
    result += lowercase;
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
  // Math logic so it actually spits out a password. also dont think the for loop does anything
  let writePassword = "";
  for (let i = 0; i < passwordLength; i++) {
    writePassword += result[Math.floor(Math.random() * result.length)];
    console.log(Math.floor(Math.random() * result.length));
    console.log(writePassword);
  }

  let showPassword = confirm(writePassword);

  // This code breaks the program somehow but I haven't figured out how so I don't want to delete it

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
