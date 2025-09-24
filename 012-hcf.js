const prompt = require('prompt-sync')();

function findHCF(firstNum, secondNum) {
    let largerNum;
    let smallerNum;

    if(firstNum > secondNum) {
        largerNum = firstNum;
        smallerNum = secondNum;
    }
    else {
        largerNum = secondNum;
        smallerNum = firstNum;
    }

    let hcf = 1;
    for(let i=smallerNum; i>1; i--) {
        if(firstNum%i==0 && secondNum%i==0) {
            hcf = i;
            break;
        }
    }
    return hcf;
}

function displayResult(firstNum, secondNum) {
    console.log(`HCF of ${firstNum} and ${secondNum} = ${findHCF(firstNum, secondNum)}`);
}

function main() {
    console.log("Please enter the first number: ");
    const firstNum = Number(prompt());

    console.log("Please enter the second number: ");
    const secondNum = Number(prompt());

    displayResult(firstNum, secondNum);
}

main();

