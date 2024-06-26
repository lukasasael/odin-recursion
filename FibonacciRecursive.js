const prompt = require("prompt-sync")();
const input = prompt("insira o número:");
let array = [];
for (let i = 0; i < input; i++) {
  array.push(fibsRec(i));
}

function fibsRec(input) {
  if (input < 2) return input;
  else return fibsRec(input - 1) + fibsRec(input - 2);
}
console.log(array);
