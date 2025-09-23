const prompt = require('prompt-sync')();

function isPrime(number) {
    if(number<=1) {
        return false;
    }
    else if(number == 2) {
        return true;
    }
    else if(number%2 == 0) {
        return false;
    }
    else {
        const sqrt = Number.parseInt(Math.sqrt(number));

        let isPrime = true;
        for(let i=3; i<=sqrt; i+=2) {
            if(number%i == 0) {
                isPrime = false;
                break;
            }
        }
        return isPrime;
    }
}

function displayResult(number) {
    if(isPrime(number)) {
        console.log(`Number ${number} is PRIME.`);
    }
    else {
        console.log(`Number ${number} is NOT PRIME.`);
    }
}

function main() {
    console.log("Please enter a number: ");
    const num = Number(prompt());

    displayResult(num);
}

main();