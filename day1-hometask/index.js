// 1. Take two numbers as input (using prompt)
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));

// 2. Perform arithmetic operations
const sum = num1 + num2;
const difference = num1 - num2;
const product = num1 * num2;

// 3. Use conditional operator to avoid division by zero
const division = (num2 !== 0) ? (num1 / num2) : "Cannot divide by zero";

// 4. Log all results clearly in the console
console.log("First Number:", num1);
console.log("Second Number:", num2);
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Division:", division);

// 5. Use var, let, and const appropriately
var operator = "basic calculator";
let version = "1.0";             
const creator = "Your Name";       

console.log(`Using ${operator} v${version} by ${creator}`);