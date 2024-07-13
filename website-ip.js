// Function to find IP address of a website
function findWebsiteIP() {
    const websiteUrlInput = document.getElementById('websiteUrlInput');
    const websiteIpResult = document.getElementById('websiteIpResult');

    // Get the value from the input field
    const websiteUrl = websiteUrlInput.value.trim();

    // Clear previous result
    websiteIpResult.innerHTML = '';

    // Validate the URL format
    if (!isValidUrl(websiteUrl)) {
        websiteIpResult.textContent = 'Please enter a valid website URL.';
        return;
    }

    // Fetch the IP address
    fetchWebsiteIP(websiteUrl)
        .then(ipAddress => {
            if (ipAddress) {
                websiteIpResult.textContent = `IP Address of ${websiteUrl}: ${ipAddress}`;
            } else {
                websiteIpResult.textContent = 'Unable to fetch IP address. Please try again later.';
            }
        })
        .catch(error => {
            console.error('Error fetching website IP:', error);
            websiteIpResult.textContent = 'Unable to fetch IP address. Please try again later.';
        });
}

// Function to fetch IP address of a website
async function fetchWebsiteIP(websiteUrl) {
    try {
        // Fetch the IP address using a DNS lookup
        const response = await fetch(`https://dns.google/resolve?name=${websiteUrl}&type=A`);
        const data = await response.json();

        return data.Answer[0].data || null;
    } catch (error) {
        console.error('Error fetching website IP:', error);
        return null;
    }
}

// Function to validate URL format
function isValidUrl(url) {
    // Regular expression for URL validation
    const urlPattern = /^(https?:\/\/)?([a-z0-9-]+\.)*[a-z0-9-]+\.[a-z]{2,}(\/.*)?$/i;
    return urlPattern.test(url);
}

