let fs = require('fs');
let buffer = fs.readFileSync("Elves.txt");

let text = buffer.toString();

const calorias = text.split("\n").map(Number);

var maxCalories = 0
var currentSum = 0
calorias.forEach(element => {
    currentSum += element
    if (element == 0) {
        if (currentSum > maxCalories) maxCalories = currentSum
        currentSum = 0
    }
});
console.log("Calorias máximas " + maxCalories);
