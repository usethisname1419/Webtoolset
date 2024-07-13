function extractEmails() {
    const fileInput = document.getElementById('emailFile');
    const extractedEmailsList = document.getElementById('extractedEmails');

    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const content = e.target.result;
            const emails = extractEmailsFromText(content);

            if (emails.length > 0) {
                displayExtractedEmails(emails);
            } else {
                alert('No valid emails found in the file.');
            }
        };

        reader.readAsText(file);
    } else {
        alert('Please select a file.');
    }
}

function extractEmailsFromText(text) {
    const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return text.match(emailRegex) || [];
}

function displayExtractedEmails(emails) {
    console.log('displayExtractedEmails function called');
    const extractedEmailsList = document.getElementById('extractedEmails');
    extractedEmailsList.innerHTML = '';

    if (emails.length > 0) {
        const downloadButton = document.getElementById('downloadButton');
        downloadButton.style.display = 'block'; // Display the download button

        emails.forEach(email => {
            const li = document.createElement('li');
            li.textContent = email;
            extractedEmailsList.appendChild(li);
        });
    } else {
        const noEmailsMessage = document.createElement('p');
        noEmailsMessage.textContent = 'No valid emails found in the file.';
        extractedEmailsList.appendChild(noEmailsMessage);
    }
}

function download() {
    const emails = []; // Assuming you have a way to retrieve the list of extracted emails
    const downloadLink = document.createElement('a');
    downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(emails.join('\n'));
    downloadLink.download = 'email_list.txt';

    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

// Example usage:
// const emails = ["test@example.com", "user@example.com"];
// displayExtractedEmails(emails);




function createDataURI(content) {
    return 'data:text/plain;charset=utf-8,' + encodeURIComponent(content);
}

