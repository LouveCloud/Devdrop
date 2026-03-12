const inputArea = document.getElementById('jsInput');
const outputArea = document.getElementById('jsOutput');
const btnObfuscate = document.getElementById('btnObfuscate');
const btnClear = document.getElementById('btnClear');
const btnCopy = document.getElementById('btnCopy');
const errorMessage = document.getElementById('errorMessage');

btnObfuscate.addEventListener('click', () => {
    const rawCode = inputArea.value;

    if (!rawCode.trim()) return;

    try {

        const obfuscationResult = JavaScriptObfuscator.obfuscate(rawCode, {
            compact: true,
            controlFlowFlattening: true, 

            numbersToExpressions: true, 

            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true
        });

        outputArea.value = obfuscationResult.getObfuscatedCode();
        errorMessage.classList.add('hidden');

    } catch (error) {
        errorMessage.classList.remove('hidden');
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