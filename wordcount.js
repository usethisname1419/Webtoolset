function countWords() {
    const wordCounterInput = document.getElementById('wordCounterInput');
    const fileInput = document.getElementById('fileInput');
    const wordCountResult = document.getElementById('wordCountResult');

    // Clear the previous result
    wordCountResult.innerHTML = '';

    let text;

    // If a file is uploaded, read the file content
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            text = e.target.result;
            displayWordCount(countWordsInText(text));
        };

        // Clear the text box when a file is uploaded
        wordCounterInput.value = '';

        reader.readAsText(file);
    } else {
        // Use the text box content
        text = wordCounterInput.value;
        displayWordCount(countWordsInText(text));
    }
}

function countWordsInText(text) {
    // Use a regular expression to count words
    const wordRegex = /\b\w+\b/g;
    const words = text.match(wordRegex);

    return words ? words.length : 0;
}

function displayWordCount(wordCount) {
    const wordCountResult = document.getElementById('wordCountResult');

    // Sanitize the input using DOMPurify before updating the result
    const sanitizedCount = DOMPurify.sanitize(wordCount);

    wordCountResult.innerHTML = `<p>Word Count: ${sanitizedCount}</p>`;
}

function clearInputs() {
    const wordCounterInput = document.getElementById('wordCounterInput');
    const fileInput = document.getElementById('fileInput');
    const wordCountResult = document.getElementById('wordCountResult');

    // Clear text box and file input
    wordCounterInput.value = '';
    fileInput.value = '';

    // Clear result
    wordCountResult.innerHTML = '';
}

