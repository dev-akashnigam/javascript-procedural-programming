const prompt = require('prompt-sync')();

function isLeapYear(year) {
    if(year%100 == 0) {
        if(year%400 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        if(year%4 == 0) {
            return true;
        }
        else {
            return false;
        }
    }
}

function displayResult(year) {
    if(isLeapYear(year)) {
        console.log(`Year: ${year} is a leap year.`);
    }
    else {
        console.log(`Year: ${year} is NOT leap year.`);
    }
}

function main() {
    console.log("Please enter the year: ");
    const year = Number(prompt());

    displayResult(year);
}

main();