const prompt = require('prompt-sync')();

function isPerfect(num) {
    const halfNum = num / 2;
    let sumOfDivisors = 0;

    for(let i=1; i<=halfNum; i++) {
        if(num%i == 0){
            sumOfDivisors += i;
        }
    }

    return sumOfDivisors==num;
}

function displayResult(num) {
    if(isPerfect(num)) {
        console.log(`Number: ${num} is a PERFECT NUMBER.`);
    }
    else {
        console.log(`Number: ${num} is NOT A PERFECT NUMBER.`);
    }
}

function main() {
    console.log("Please enter a number: ");
    const number = Number(prompt());

    displayResult(number);
}

main();