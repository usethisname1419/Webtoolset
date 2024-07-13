let qrCodeDataURL = ''; // Store QR code image data URL

function generateQRCode() {
    // Remove the old QR code and download button
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = '';
    document.getElementById('downloadButton').style.display = 'none';

    const inputData = document.getElementById('qrCodeInput').value.trim();

    // Validate input (you can add more specific validation as needed)
    if (inputData === '') {
        alert('Please enter valid data.');
        return;
    }
    const maxCharacters = 1000;
    if (inputData.length > maxCharacters) {
        alert(`Input exceeds maximum character limit of ${maxCharacters}.`);
        return;
    }
    // Sanitize and escape input to prevent XSS
    const sanitizedInput = sanitizeInput(inputData);

    // Create a new QR code
    const qrcode = new QRCode(qrcodeContainer, {
        text: sanitizedInput,
        width: 200,
        height: 200,
    });

    // Get the QR code canvas element
    const canvas = qrcodeContainer.querySelector('canvas');
 
    // Store the QR code image data URL
    qrCodeDataURL = canvas.toDataURL('image/png');

    // Display the download button
    document.getElementById('downloadButton').style.display = 'block';
}

function clearQRCode() {
    // Clear the QR code and hide the download button
    document.getElementById('qrcode').innerHTML = '';
    document.getElementById('downloadButton').style.display = 'none';
}

function downloadQRCode() {
    // Ensure QR code data URL is available
    if (!qrCodeDataURL) {
        alert('No QR code generated to download.');
        return;
    }

    // Create a temporary anchor element for download
    const downloadLink = document.createElement('a');
    downloadLink.href = qrCodeDataURL;
    downloadLink.download = 'qrcode.png';

    // Append the link to the document body and trigger a click event to initiate the download
    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Clean up by removing the link from the document body
    document.body.removeChild(downloadLink);
}




function sanitizeInput(input) {
    // Use a library like DOMPurify or a similar mechanism to sanitize and escape input
    // Example using DOMPurify:
    // Include DOMPurify library: <script src="https://cdnjs.cloudflare.com/ajax/libs/dompurify/2.2.9/purify.min.js"></script>
    return DOMPurify.sanitize(input);
}

// Add an event listener to the input field to track character count
document.getElementById('qrCodeInput').addEventListener('input', function() {
    const inputLength = this.value.length;
    const maxCharacters = parseInt(this.getAttribute('maxlength'));
    const charCountDisplay = document.getElementById('charCount');
    charCountDisplay.textContent = `${inputLength}/${maxCharacters} characters`;
});

