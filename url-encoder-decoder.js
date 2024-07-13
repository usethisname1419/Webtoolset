function encodeURL() {
    const urlInput = document.getElementById('urlInput');
    const urlResult = document.getElementById('urlResult');

    const url = urlInput.value.trim();
    
    // Sanitize the input using DOMPurify to prevent XSS
    const sanitizedURL = DOMPurify.sanitize(url);

    const encodedURL = encodeURIComponent(sanitizedURL);
    urlResult.textContent = `${encodedURL}`;
}

function decodeURL() {
    const urlInput = document.getElementById('urlInput');
    const urlResult = document.getElementById('urlResult');

    const url = urlInput.value.trim();
    
    // Sanitize the input using DOMPurify to prevent XSS
    const sanitizedURL = DOMPurify.sanitize(url);

    const decodedURL = decodeURIComponent(sanitizedURL);
    urlResult.textContent = `${decodedURL}`;
}

function clearText() {
    document.getElementById('urlInput').value = '';
    document.getElementById('urlResult').textContent = '';
}

