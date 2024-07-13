function generateNumberList() {
        const startNumberInput = document.getElementById('startNumber');
        const endNumberInput = document.getElementById('endNumber');
        const generatedList = document.getElementById('generatedList');
        const downloadLink = document.getElementById('downloadLink');

        const startNumber = parseInt(startNumberInput.value);
        const endNumber = parseInt(endNumberInput.value);

        if (validateNumbers(startNumber, endNumber)) {
            const numbers = generateNumbersInRange(startNumber, endNumber);
            const formattedList = escapeHTML(numbers.join('\n'));

            generatedList.textContent = formattedList;
            downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(formattedList);
            downloadLink.style.display = 'block';
        } else {
            alert('Please enter valid start and end numbers.');
        }
    }

    function validateNumbers(startNumber, endNumber) {
        return !isNaN(startNumber) && !isNaN(endNumber) && startNumber <= endNumber;
    }

    function generateNumbersInRange(startNumber, endNumber) {
        const numbers = [];
        for (let i = startNumber; i <= endNumber; i++) {
            numbers.push(i);
        }
        return numbers;
    }

    function escapeHTML(html) {
        const div = document.createElement('div');
        div.textContent = html;
        return div.innerHTML;
    }
  function download() {
    const generatedList = document.getElementById('generatedList').textContent;
    const blob = new Blob([generatedList], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'number_list.txt';
    link.click();
    setTimeout(() => {
        URL.revokeObjectURL(url); // Revoke the object URL after download
        link.remove(); // Remove the temporary anchor element
    }, 100); // Delay for a short period to ensure the download starts before revoking the object URL
}
