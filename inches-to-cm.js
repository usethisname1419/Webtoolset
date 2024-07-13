function convertToCentimeters() {
    const inchesInput = document.getElementById('inchesInput').value;
    const cmResult = document.getElementById('cmResult');

    // Clear previous result
    cmResult.innerHTML = '';

    // Validate input
    if (isNaN(inchesInput) || inchesInput === '') {
        cmResult.textContent = 'Please enter a valid number for inches.';
        return;
    }

    // Perform conversion
    const inches = parseFloat(inchesInput);
    const centimeters = inches * 2.54;

    // Display result
    cmResult.textContent = `${inches} inches is equal to ${centimeters.toFixed(2)} centimeters.`;
}
function convertToInches() {
    const cmInput = document.getElementById('cmInput').value;
    const inchesResult = document.getElementById('inchesResult');

    // Clear previous result
    inchesResult.innerHTML = '';

    // Validate input
    if (isNaN(cmInput) || cmInput === '') {
        inchesResult.textContent = 'Please enter a valid number for centimeters.';
        return;
    }

    // Perform conversion
    const centimeters = parseFloat(cmInput);
    const inches = centimeters / 2.54;

    // Display result
    inchesResult.textContent = `${centimeters} centimeters is equal to ${inches.toFixed(2)} inches.`;
}

