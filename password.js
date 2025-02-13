// RANDOM PASSWORD GENERATOR

function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
  
  const lowercaseChars = "abcdfdgfgdghdfdddggf";
  const uppercaseChars = "ABCDEFGFGGJFFHFKFLOUU";
  const numberChars = "0123456789";
  const symbolsChars = "!@#$%&**&@#_=";

  let allowedChars = "";
  let password = "";


  allowedChars += includeLowercase ? lowercaseChars : "";
  allowedChars += includeUppercase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolsChars : "";

  if (length < 0) {
  return '(password length must be at least 1)'
  }

  if (allowedChars.length === 0) {
    return '(At least 1 set of character needs to be selected)'
  }
  // console.log(allowedChars);

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }


  return password;

}


// const passwordLength = 10;
// console.log(passwordLength)
// const includeLowercase = true;
// const includeUppercase = true;
// const includeNumbers = true;
// const includeSymbols = true;


const lowerCase = document.getElementById('lowerCase');
const upperCase = document.getElementById('upperCase');
const mySubmit = document.getElementById("mySubmit");
const passwordLengthInput = document.getElementById('passwordLength');
const includeNumbers = document.getElementById('number');
const includeSymbols = document.getElementById('symbol');

let passwordLength;

mySubmit.onclick = function () {
  const includeLowercase = lowerCase.checked;
  console.log(includeLowercase);
 
  const includeUppercase = upperCase.checked;
  console.log(includeUppercase);

  const includeNumbers = number.checked;
  console.log(includeUppercase);



  if (passwordLengthInput.value == '') {
    alert('passwordlength is empty')
    
  } else {
    passwordLength = Number(passwordLengthInput.value);

    const password = generatePassword(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)

    console.log(`Generated password: ${password}`);      
  }

  
}



                          

