// Read two numbers and print their sum, difference, product, and quotient.

const prompt = require('prompt-sync')();

function printResults(numX, numY) {
    const sum = numX + numY;
    const diff = numX - numY;
    const product = numX * numY;
    const quotient = numX / numY;

    console.log(`Sum = ${sum}`);
    console.log(`Difference = ${diff}`);
    console.log(`Product = ${product}`);
    console.log(`Quotient = ${quotient}`);
}

function main() {
    console.log("Please enter the first number: ");
    const firstNum = Number(prompt());

    console.log("Please enter the second number: ");
    const secondNum = Number(prompt());

    printResults(firstNum, secondNum);
}

main();