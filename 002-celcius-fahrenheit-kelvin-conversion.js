const prompt = require('prompt-sync')();

function temperatureConvertor(temp, unit) {
    const alphabet_C = "C";
    const alphabet_F = "F";
    const alphabet_K = "K";

    if(unit.toUpperCase().startsWith(alphabet_C)) {
        let fahrenheitTemp = ((9*temp)/5)+32;
        let kelvinTemp = temp + 273.15;
        console.log(`${temp} in celcius = ${fahrenheitTemp} in fahrenheit`);
        console.log(`${temp} in celcius = ${kelvinTemp} in kelvin`);
    }
    else if(unit.toUpperCase().startsWith(alphabet_F)) {
        let celciusTemp = ((temp - 32)*5)/9;
        let kelvinTemp = celciusTemp + 273.15;
        console.log(`${temp} in fahrenheit = ${celciusTemp} in celcius`);
        console.log(`${temp} in fahrenheit = ${kelvinTemp} in kelvin`);
    }
    else if(unit.toUpperCase().startsWith(alphabet_K)) {
        let celciusTemp = temp - 273.15;
        let fahrenheitTemp = (((temp - 273.15)*9)/5)+32;
        console.log(`${temp} in kelvin = ${celciusTemp} in celcius`);
        console.log(`${temp} in kelvin = ${fahrenheitTemp} in fahrenheit`);
    }
    else {
        console.log("Please enter correct unit of temperature (C/F/K)");
    }
}

function main() {
    console.log("Please enter the temperature to be converted: ");
    const temperature = Number(prompt());

    console.log("Please enter the unit of temperature entered (C for Celcius, F for Fahrenheit and K for Kelvin): ");
    const unitOfTemperature = prompt();

    temperatureConvertor(temperature, unitOfTemperature);
}

main()






















