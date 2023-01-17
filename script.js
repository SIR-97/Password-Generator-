// Started my code 

var generateBtn = document.querySelector('#generate');
var passwordText = document.querySelector('#password');


// Array of special characters to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

// Array of numeric characters to be included in passwordgg
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// Choices declared outside the if statement so they can be related to the condition
var choice = "";

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// function that will generate random password"
function writePassword() {
  event.preventDefault(); // prevents the screen from refreshing once the button is clicked.

  // clear the previous password from the screen
  passwordText.value === ""; 
  var randomString = "";

  
   // Added password criteria
   var lcLetter = confirm("Do you want your password to contain lowercase letters?");
   var ucLetter = confirm("Do you want your password to contain uppercase letters?");
   var number = confirm("Do you want your password to contain numbers?");
   var specCharacter = confirm("Do you want your password to contain special characters?");
   var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

   // function that checks if it's between 8 and 128 characters
   if (passwordLength < 8 || passwordLength > 128) {
       alert("Your password is not between 8 characters and 128 characters. Please try again.");
       var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
   }

    // prompts user to select at least one criterior for password
    else if (lcLetter === false && ucLetter === false && number === false && specCharacter === false) {
        alert("You must chose at least one password criteria.");
        var lowercaseLett = confirm("Do you want your password to contain lowercase letters?");
        var uppercaseLett = confirm("Do you want your password to contain uppercase letters?");
        var number = confirm("Do you want your password to contain numbers?");
        var specialChar = confirm("Do you want your password to contain special characters?");
    }

    // Use the criteria that are selected to generate the password
    if (lcLetter) {
        choice += lowerCasedCharacters;
    }

    if (ucLetter) {
        choice += upperCasedCharacters;
    }

    if (number) {
        choice += numericCharacters;
    }

    if (specCharacter) {
        choice += specialCharacters;
    }

    // Generates a random password based on the criteria selected
    for (var i = 0; i < passwordLength; i++) {
    adrandomString += choice.charAt(Math.floor(Math.random() * choice.length));
    }
    passwordText.value = randomString; // displays the generated password 
  }

