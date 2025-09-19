const prompt = require('prompt-sync')();

function calcAreaOfCircle(radius) {
    return Math.PI * radius * radius;
}

function calcPerimeterOfCircle(radius) {
    return 2 * Math.PI * radius;
}

function calcAreaOfRectangle(length, width) {
    return length * width;
}

function calcPerimeterOfRectangle(length, width) {
    return 2*(length * width);
}

function calcAreaOfTriangle(lengthOfFirstSide, lengthOfSecondSide, lengthOfThirdSide) {
    const semiPerimeter = (lengthOfFirstSide + lengthOfSecondSide + lengthOfThirdSide)/2;
    return Math.sqrt(semiPerimeter * Math.abs(semiPerimeter - lengthOfFirstSide) * Math.abs(semiPerimeter - lengthOfSecondSide) * Math.abs(semiPerimeter - lengthOfThirdSide));
}

function calcPerimeterOfTriangle(lengthOfFirstSide, lengthOfSecondSide, lengthOfThirdSide) {
    return lengthOfFirstSide + lengthOfSecondSide + lengthOfThirdSide;
}

function main() {
    console.log("Please enter the radius of circle: ")
    const radiusOfCircle = Number(prompt());

    console.log("Please enter the length of rectangle: ")
    const lengthOfRectangle = Number(prompt());

    console.log("Please enter the width of rectangle: ")
    const widthOfRectangle = Number(prompt());

    console.log("Please enter the length of first side of triangle: ")
    const lengthOfFirstSideOfTriangle = Number(prompt());

    console.log("Please enter the length of second side of triangle: ")
    const lengthOfSecondSideOfTriangle = Number(prompt());

    console.log("Please enter the length of third side of triangle: ")
    const lengthOfThirdSideOfTriangle = Number(prompt());

    console.log(`Area and Perimeter of Circle of radius: ${radiusOfCircle.toFixed(2)} = ${calcAreaOfCircle(radiusOfCircle).toFixed(2)}, ${calcPerimeterOfCircle(radiusOfCircle).toFixed(2)}`);
    console.log(`Area and Perimeter of Rectangle of length: ${lengthOfRectangle.toFixed(2)} and width: ${widthOfRectangle.toFixed(2)} = ${calcAreaOfRectangle(lengthOfRectangle, widthOfRectangle).toFixed(2)}, ${calcPerimeterOfRectangle(lengthOfRectangle, widthOfRectangle).toFixed(2)}`);
    console.log(`Area and Perimeter of Triangle of lengths: ${lengthOfFirstSideOfTriangle.toFixed(2)}, ${lengthOfSecondSideOfTriangle.toFixed(2)} and ${lengthOfThirdSideOfTriangle.toFixed(2)} = ${calcAreaOfTriangle(lengthOfFirstSideOfTriangle, lengthOfSecondSideOfTriangle,lengthOfThirdSideOfTriangle).toFixed(2)}, ${calcPerimeterOfTriangle(lengthOfFirstSideOfTriangle, lengthOfSecondSideOfTriangle, lengthOfThirdSideOfTriangle).toFixed(2)}`);
}

main()