function selectPolicy() {
    const policySelect = document.getElementById('policySelect');
    const customPolicy = document.getElementById('customPolicy');

    // Show/hide custom input based on the selected option
    customPolicy.style.display = (policySelect.value === 'custom') ? 'block' : 'none';
}

function generateCSP() {
    const policySelect = document.getElementById('policySelect');
    const customInput = document.getElementById('customInput');
    const resultContainer = document.getElementById('result');

    // Remove any existing result
    resultContainer.innerHTML = '';

    let policy;
    // Check if the user selected a predefined policy
    if (policySelect.value !== 'custom') {
        policy = policySelect.value;
    } else {
        // Use custom policy if selected
        policy = customInput.value.trim();
    }

    // Check if the policy is not empty
    if (!policy) {
        resultContainer.innerText = 'Please select a CSP policy or enter a custom one.';
        return;
    }

    // Generate CSP header
    const cspHeader = `Content-Security-Policy: ${policy}`;

    // Display the CSP header
    const cspHeaderElement = document.createElement('pre');
    cspHeaderElement.innerText = cspHeader;
    resultContainer.appendChild(cspHeaderElement);
}

