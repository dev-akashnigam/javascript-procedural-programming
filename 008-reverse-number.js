const prompt = require('prompt-sync')();

function getReversedNumber(num) {
    let reversedNumber = 0;

    while(num!=0) {
        let lastDigit = num % 10;
        reversedNumber = reversedNumber * 10 + lastDigit;

        num = Number.parseInt(num / 10);
    }

    return reversedNumber;
}

function displayResult(num) {
    console.log(`Reverse of number ${num} = ${getReversedNumber(num)}`);
}

function main() {
    console.log("Please enter a number: ");
    const number = Number(prompt());

    displayResult(number);
}

main();