// Function to convert temperature between Fahrenheit and Celsius
function convertTemperature() {
    const fahrenheitInput = document.getElementById('fahrenheitInput');
    const celsiusInput = document.getElementById('celsiusInput');
    const conversionResult = document.getElementById('conversionResult');

    // Get the values from the input fields
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = parseFloat(celsiusInput.value);

    // Clear previous result
    conversionResult.innerHTML = '';

    // Perform conversion
    if (!isNaN(fahrenheit)) {
        const convertedCelsius = fahrenheitToCelsius(fahrenheit);
        celsiusInput.value = convertedCelsius.toFixed(2);
        conversionResult.textContent = `${fahrenheit} °F is approximately ${convertedCelsius.toFixed(2)} °C.`;
    } else if (!isNaN(celsius)) {
        const convertedFahrenheit = celsiusToFahrenheit(celsius);
        fahrenheitInput.value = convertedFahrenheit.toFixed(2);
        conversionResult.textContent = `${celsius} °C is approximately ${convertedFahrenheit.toFixed(2)} °F.`;
    } else {
        conversionResult.textContent = 'Please enter a valid temperature in either Fahrenheit (°F) or Celsius (°C).';
    }
}

// Function to convert Fahrenheit (°F) to Celsius (°C)
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Function to convert Celsius (°C) to Fahrenheit (°F)
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

