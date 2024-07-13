// base64.js

function encodeText() {
    const inputText = sanitizeInput(document.getElementById('inputText').value);
    const encodedText = btoa(inputText);
    document.getElementById('outputText').value = encodedText;
}

function decodeText() {
    const encodedText = sanitizeInput(document.getElementById('inputText').value);
    try {
        const decodedText = atob(encodedText);
        document.getElementById('outputText').value = decodedText;
    } catch (error) {
        alert('Invalid Base64 input.');
    }
}

function clearText() {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
}

function sanitizeInput(input) {
    // Replace < and > with their HTML entities to prevent XSS
    return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

