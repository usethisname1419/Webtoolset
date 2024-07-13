// KM to Miles Converter
function convertToMiles() {
    const kmInput = document.getElementById("kmInput").value;
    const milesResult = document.getElementById("milesResult");

    // Input validation to protect against XSS
    if (!isValidNumber(kmInput)) {
        milesResult.innerHTML = "Please enter a valid number.";
        return;
    }

    const km = parseFloat(kmInput);
    const miles = km * 0.621371;
    milesResult.innerHTML = `${km} kilometers is approximately ${miles.toFixed(2)} miles.`;
}

// Miles to KM Converter
function convertToKm() {
    const milesInput = document.getElementById("milesInput").value;
    const kmResult = document.getElementById("kmResult");

    // Input validation to protect against XSS
    if (!isValidNumber(milesInput)) {
        kmResult.innerHTML = "Please enter a valid number.";
        return;
    }

    const miles = parseFloat(milesInput);
    const km = miles * 1.60934;
    kmResult.innerHTML = `${miles} miles is approximately ${km.toFixed(2)} kilometers.`;
}

// Function to validate input as a number
function isValidNumber(input) {
    return /^\d*\.?\d*$/.test(input);
}

