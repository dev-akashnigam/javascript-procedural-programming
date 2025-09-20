const prompt = require('prompt-sync')();

function printTable(num) {
    for(let i=1; i<=10; i++) {
        console.log(`${num} X ${i} = ${num*i}`);
    }
}

function main() {
    console.log("Please enter a number: ");
    const num = Number(prompt());

    printTable(num);
}

main();