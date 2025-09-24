const prompt = require('prompt-sync')();

function printSolidSquare(rowCount) {
    const colCount = rowCount;
    for(let row=1; row<=rowCount; row++) {
        for(let col=1; col<=colCount; col++) {
            process.stdout.write("* ");
        }
        console.log();
    }
}

function main() {
    console.log("Please enter the number of rows required in the solid square pattern: ");
    const rowCount = Number(prompt());

    printSolidSquare(rowCount);
}

main();