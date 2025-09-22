const prompt = require('prompt-sync')();

function calcSum(num) {
    let sum = 0;
    for(let i=1; i<=num; i++) {
        sum += i;
    }
    return sum;
}

function printResult(num) {
    console.log(`Sum of first ${num} natural numbers = ${calcSum(num)}`);
}

function main() {
    console.log("Please enter the natural number till where sum is required: ");
    const natNum = Number(prompt());

    printResult(natNum);
}

main();