const prompt = require("prompt-sync")({ sigint: true });

function getUserInput(promptMessage) {
  let userInput;
  do {
    userInput = prompt(promptMessage);
    userInput = parseFloat(userInput); // Convert the user input to a number
    if (isNaN(userInput) || userInput <= 0) {
      console.log("Entrada inválida. Por favor, ingrese un número natural válido.");
    }
  } while (isNaN(userInput) || userInput <= 0); // Continue until a valid natural number is provided
  return userInput;
}

let a = getUserInput("Ingrese el primer valor: ");
console.log(a);

let b = getUserInput("Ingrese el segundo valor: ");
console.log(b);

let c = getUserInput("Ingrese el tercer valor: ");
console.log(c);

if (a > b && a > c) {
  console.log("El primer valor es el mayor.");
} else if (b > a && b > c) {
  console.log("El segundo valor es el mayor.");
} else if (c > a && c > b) {
  console.log("El tercer valor es el mayor.");
} else {
  console.log("Hay dos o más valores iguales.");
}