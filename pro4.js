let age = 24;
let message = age >= 18 ? "You re an adult" : "You re a minor";
console.log(message);

let time = 9;
let greeting = time < 12 ? "Good Morning" : "Good Afternoon";
console.log(greeting);

let isStudent = 9;
let student = isStudent ? "You are a student" : "You re not a student"
console.log(student);

let purchaseAmount = 100;
let discount = purchaseAmount >= 100 ? 10 : 0;
let discountPrice = purchaseAmount * (discount / 100);
console.log(discountPrice);
console.log(`Your total is $${purchaseAmount - discountPrice}`);



let numbers = [1, 2, 3, 2, 4]


numbers.forEach(double)
numbers.forEach(display)


function double(element, index, array) {
  array[index] = element * 2
}


function display(element) {
  console.log(element);
}

// function double(element, index, array) {
// array[index] = element * 2
// }
