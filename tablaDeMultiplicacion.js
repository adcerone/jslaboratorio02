const prompt = require("prompt-sync")({ sigint: true });

function getUserInput(promptMessage) {
  let userInput;
  do {
    userInput = prompt(promptMessage);
    userInput = parseInt(userInput); 
    if (isNaN(userInput) || userInput <= 0) {
      console.log("Entrada inválida. Por favor, ingrese un número natural válido.");
    }
  } while (isNaN(userInput) || userInput <= 0);
  return userInput;
}

let c = 1;

let a = getUserInput("Ingrese un numero: ");
console.log(a);

while (c <= 10) {
  let b = a * c; 
  console.log(`(${a})x(${c})=(${b})`); 
  c++; 
}
