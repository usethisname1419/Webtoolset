// Function to convert weight between pounds (lbs) and kilograms (kg)
function convertWeight() {
    const lbsInput = document.getElementById('lbsInput');
    const kgInput = document.getElementById('kgInput');
    const conversionResult = document.getElementById('conversionResult');

    // Get the values from the input fields
    const lbs = parseFloat(lbsInput.value);
    const kg = parseFloat(kgInput.value);

    // Clear previous result
    conversionResult.innerHTML = '';

    // Perform conversion
    if (!isNaN(lbs)) {
        const convertedKg = lbsToKg(lbs);
        kgInput.value = convertedKg.toFixed(2);
        conversionResult.textContent = `${lbs} lbs is approximately ${convertedKg.toFixed(2)} kg.`;
    } else if (!isNaN(kg)) {
        const convertedLbs = kgToLbs(kg);
        lbsInput.value = convertedLbs.toFixed(2);
        conversionResult.textContent = `${kg} kg is approximately ${convertedLbs.toFixed(2)} lbs.`;
    } else {
        conversionResult.textContent = 'Please enter a valid weight in either pounds (lbs) or kilograms (kg).';
    }
}

// Function to convert pounds (lbs) to kilograms (kg)
function lbsToKg(lbs) {
    return lbs * 0.453592; // 1 pound = 0.453592 kilograms
}

// Function to convert kilograms (kg) to pounds (lbs)
function kgToLbs(kg) {
    return kg * 2.20462; // 1 kilogram = 2.20462 pounds
}

