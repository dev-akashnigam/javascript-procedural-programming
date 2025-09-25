const prompt = require('prompt-sync')();

function printRightAngledTriangle(rowCount) {
    for(let row=1; row<=rowCount; row++) {
        for(let col=1; col<=row; col++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

function main() {
    console.log("Please enter the number of rows required in the right angled triangle: ");
    const rowCount = Number(prompt());

    printRightAngledTriangle(rowCount);
}

main();