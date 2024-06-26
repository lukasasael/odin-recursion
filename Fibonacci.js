const prompt = require("prompt-sync")();
const input = prompt("insira o número:");
let array = [];
fibs(input);
function fibs(input) {
  for (let i = 0; input > i; i++) {
    if (i == 0) {
      array.push(0);
    } else if (i == 1) {
      array.push(1);
    } else array.push(array[i - 1] + array[i - 2]);
  }
  return array;
}
console.log(array);
