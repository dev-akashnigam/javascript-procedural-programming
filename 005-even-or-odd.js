const prompt = require('prompt-sync')();

function isEven(num) {
    return num%2 == 0;
}

function displayResult(num) {
    if(isEven(num)) {
        console.log(`Number: ${num} is even.`);
    }
    else {
        console.log(`Number: ${num} is odd.`);
    }
}

function main() {
    console.log("Please enter a number: ");
    const num = Number(prompt());

    displayResult(num);
}

main();