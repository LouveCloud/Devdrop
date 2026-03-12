const inputArea = document.getElementById('jsonInput');
const outputArea = document.getElementById('jsonOutput');
const btnFormat = document.getElementById('btnFormat');
const btnClear = document.getElementById('btnClear');
const btnCopy = document.getElementById('btnCopy');
const errorMessage = document.getElementById('errorMessage');

btnFormat.addEventListener('click', () => {
    const rawData = inputArea.value; 

    if (!rawData.trim()) return;

    try {

        const parsedData = JSON.parse(rawData);

        const formattedData = JSON.stringify(parsedData, null, 4);

        outputArea.value = formattedData;

        errorMessage.classList.add('hidden');

    } catch (error) {

        errorMessage.classList.remove('hidden');
        errorMessage.innerText = "Error: " + error.message;
        outputArea.value = ""; 

    }
});

btnClear.addEventListener('click', () => {
    inputArea.value = '';
    outputArea.value = '';
    errorMessage.classList.add('hidden');
});

btnCopy.addEventListener('click', () => {
    if (outputArea.value) {

        navigator.clipboard.writeText(outputArea.value);

        const originalText = btnCopy.innerText;
        btnCopy.innerText = "Copied! ✅";
        setTimeout(() => {
            btnCopy.innerText = originalText;
        }, 2000);
    }
});