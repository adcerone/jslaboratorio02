const prompt = require("prompt-sync")({ sigint: true });

function getUserInput(promptMessage) {
  let userInput;
  do {
    userInput = prompt(promptMessage);
    userInput = userInput.trim().toLowerCase();
    if (!["t", "m", "d"].includes(userInput)) {
      console.log("Entrada inválida. Por favor, seleccione 't', 'm', o 'd'.");
    }
  } while (!["t", "m", "d"].includes(userInput));
  return userInput;
}

function mayorDeTres() {
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
}
  
function tablaDeMultiplicacion() {
    const prompt = require("prompt-sync")({ sigint: true });

    function getUserInput(promptMessage) {
    let userInput;
    do {
        userInput = prompt(promptMessage);
        userInput = parseFloat(userInput); 
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

}
  
function tablaDeDivision() {
    const prompt = require("prompt-sync")({ sigint: true });

    function getUserInput(promptMessage) {
    let userInput;
    do {
        userInput = prompt(promptMessage);
        userInput = parseFloat(userInput); 
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
    console.log(`(${b})/(${c})=(${a})`); 
    c++; 
    }
  }
  
let option = getUserInput("Seleccione una función: mayor de (t)res, tabla de (m)ultiplicacion o tabla de (d)ivision. ");
switch (option) {
    case "t":
        mayorDeTres();
        break;
    case "m":
        tablaDeMultiplicacion();
        break;
    case "d":
        tablaDeDivision();
        break;
    default:
        console.log("Opción no reconocida.");
        break;
}