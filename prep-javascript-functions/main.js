function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return name;
}

var greeting = getGreeting('World');
console.log('Hello' + ' ' + greeting + '!');

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var multiplyBy5 = addAndMultiplyBy5(10, 5);
console.log('product', multiplyBy5);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var quotientBy5 = multiplyAndDivideBy5(35, 10);
console.log('quotient', quotientBy5);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('difference', difference);

function getCircleCircumference(radius) {
  return (radius * radius) * 3.14;
}

var circumference = getCircleCircumference(3);
console.log('Circumference', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Nolan', 'Reda');
console.log('Full name:', fullName);

function cube(number) {
  return number * number * number;
}

var cubeIs = cube(5);
console.log('cube equals', cubeIs);
