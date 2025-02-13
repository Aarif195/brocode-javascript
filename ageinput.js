
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function () {
  // check if input is empty
  if (myText.value == '') {
    alert('you must input a age')
    
  } else {
    age = myText.value;
    age = Number(age);


    if (age == 0) {
      resultElement.textContent = 'You re small'
    } else if (age >= 100) {
      resultElement.textContent = 'You are TOO OLD to enter this site';
    } else if (age >= 18) {
      resultElement.innerHTML = ' You are old enough to enter this site';
    } else if (age < 0) {
      resultElement.textContent = 'Your age cannot be below 0';
    }
    else {
      resultElement.textContent = 'You must be 18+ to enter this site';
    }
  }
  
}