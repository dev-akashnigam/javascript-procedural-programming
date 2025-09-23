const prompt = require('prompt-sync')();

function findDigits(num) {
    let countOfdigits = 0;
    while(num!=0) {
        num = Number.parseInt(num/10);
        countOfdigits++;
    }
    return countOfdigits;
}

function isArmstrong(num) {
    let origNum = num;
    let totalDigits = findDigits(num);
    let sum = 0;
    while(num!=0) {
        let lastDigit = num % 10;
        sum = sum + Number.parseInt(Math.pow(lastDigit, totalDigits));

        num = Number.parseInt(num/10); 
    }
    return sum==origNum;
}

function displayResult(num) {
    if(isArmstrong(num)) {
        console.log(`Number ${num} is ARMSTRONG NUMBER.`);
    }
    else {
        console.log(`Number ${num} is NOT ARMSTRONG NUMBER.`);
    }
}

function main() {
    console.log("Please enter a number: ");
    let number = Number(prompt());

    displayResult(number);
}

main();