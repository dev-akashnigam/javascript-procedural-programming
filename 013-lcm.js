const prompt = require('prompt-sync')();

function findLCM(firstNum, secondNum) {
    let largerNumber;
    let smallerNumber;
    if(firstNum > secondNum) {
        largerNumber = firstNum;
        smallerNumber = secondNum;
    }
    else {
        largerNumber = secondNum;
        smallerNumber = firstNum;
    }

    let lcm;
    let multiple = 1;
    while(true) {
        if(((largerNumber*multiple) % smallerNumber) == 0) {
            lcm = largerNumber*multiple;
            break;
        }
        multiple++;
    }
    return lcm;
}

function displayResult(firstNum, secondNum) {
    console.log(`LCM of ${firstNum} and ${secondNum} = ${findLCM(firstNum, secondNum)}`);
}

function main() {
    console.log("Please enter the first number: ");
    const firstNumber = Number(prompt());

    console.log("Please enter the second number: ");
    const secondNumber = Number(prompt());

    displayResult(firstNumber, secondNumber);
}

main();