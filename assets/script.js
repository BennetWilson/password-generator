// Assignment Code
var generateBtn = document.querySelector("#generate");
let lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
let uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let spcl = [
  "~",
  "!",
  "@",
  "#",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "+",
  "=",
  "-",
  "?",
  "<",
  ">",
  "'",
  "*",
  "/",
  ";",
  ".",
  "`",
  "-",
  "+",
  "{",
  "[",
  "]",
  "}",
  "|",
  ":",
];
let result = [];

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
