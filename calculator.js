// CALCULATOR PROGRAM
// DECLARE CONST
// FUNCTION OF appendToDisplay
// FUNCTION OF clearDisplay
// FUNCTION OF calculate
// Try() block
// Catch ( ) method to catch error

const display = document.getElementById('display');

function appendToDisplay(input) {
  display.value += input;
  console.log(display.value)
  console.log(input)
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  }
  catch (error) {
    display.value = "Error"
  }
}

// thier is one parameter(input) bcos we re passing (+) an char wen we called the fuction
// display append with =+input
// if thier is an erroe, we try this code and catch any error that occur