function geolocateIP() {
    const ipInput = document.getElementById('ipInput');
    const geolocationResult = document.getElementById('geolocationResult');

    const ipAddress = ipInput.value.trim();

    if (validateIP(ipAddress)) {
        const apiUrl = `https://ipinfo.io/${ipAddress}/json?token=6c085c345e72fa`;

        // Make a request to ipinfo.io API
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                displayIPGeolocation(data);
            })
            .catch(error => {
                console.error('Error fetching geolocation:', error);
                alert('Error fetching geolocation information. Please try again later.');
            });
    } else {
        alert('Please enter a valid IP address.');
    }
}

function validateIP(ipAddress) {
    // Simple validation for IPv4 and IPv6
    const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
    const ipv6Regex = /^([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,7}:([0-9a-fA-F]{1,4}:){1,7}[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}$|^([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}$|^([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}$|^([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}$|^([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}$|^:[0-9a-fA-F]{1,4}(:[0-9a-fA-F]{1,4}){1,6}$/;

    return ipv4Regex.test(ipAddress) || ipv6Regex.test(ipAddress);
}

function displayIPGeolocation(data) {
    const geolocationResult = document.getElementById('geolocationResult');
    geolocationResult.innerHTML = '';

    const ipParagraph = document.createElement('p');
    ipParagraph.textContent = `IP Address: ${data.ip}`;
    geolocationResult.appendChild(ipParagraph);

    const locationParagraph = document.createElement('p');
    locationParagraph.textContent = `Location: ${data.city}, ${data.region}, ${data.country}`;
    geolocationResult.appendChild(locationParagraph);

    const coordinatesParagraph = document.createElement('p');
    coordinatesParagraph.textContent = `Latitude: ${data.loc.split(',')[0]}, Longitude: ${data.loc.split(',')[1]}`;
    geolocationResult.appendChild(coordinatesParagraph);
}

