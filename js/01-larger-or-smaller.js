let num1 = window.prompt("Enter first number");
num1 = parseInt(num1, 10);
let num2 = window.prompt("Enter second number");
num2 = parseInt(num2, 10);

const biggest = num1 > num2 ? num1 : num2;

if(num1 === num2){
    document.write("Numbers are tied: " + biggest);
} else {
    document.write("Larger number is: " + biggest);
}