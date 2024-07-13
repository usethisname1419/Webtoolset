async function analyzeHeaders() {
    const url = document.getElementById('urlInput').value;
    const resultContainer = document.getElementById('result');
    
    try {
        const response = await fetch(url);
        
        // Check if the response is successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const headers = response.headers;

        // Extract security-related headers
        const securityHeaders = {
            'X-Content-Type-Options': headers.get('X-Content-Type-Options'),
            'X-Frame-Options': headers.get('X-Frame-Options'),
            'X-XSS-Protection': headers.get('X-XSS-Protection'),
            'Content-Security-Policy': headers.get('Content-Security-Policy'),
            'Strict-Transport-Security': headers.get('Strict-Transport-Security'),
            'Referrer-Policy': headers.get('Referrer-Policy')
        };

        // Display the analysis result
        resultContainer.innerHTML = `<h2>Security Headers for ${url}</h2>`;
        resultContainer.innerHTML += '<ul>';
        for (const header in securityHeaders) {
            if (securityHeaders[header]) {
                resultContainer.innerHTML += `<li>${header}: ${securityHeaders[header]}</li>`;
            }
        }
        resultContainer.innerHTML += '</ul>';
    } catch (error) {
        resultContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}

