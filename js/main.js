let num1 = -3;
let num2 = -3;

function calculate(num1, num2) {
let sum = num1 + num2;
let subtract = num1 - num2;
let multiply = num1 * num2;

if (sum>=0) {
    console.log("Wynik dodawania wynosi " + sum);
}
else {
    console.log("Wynik jest nieprawidłowy");
}
if (subtract>=0) {
    console.log("Wynik odejmowania wynosi " + subtract);
}
else {
    console.log("Wynik jest nieprawidłowy");
}
if (multiply>=0) {
    console.log("Wynik mnożenia wynosi " + multiply);
}
else {
    console.log("Wynik jest nieprawidłowy");
}
}

calculate(num1, num2);