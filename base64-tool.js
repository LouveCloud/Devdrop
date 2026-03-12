const textInput = document.getElementById('textInput');
const base64Input = document.getElementById('base64Input');
const btnEncode = document.getElementById('btnEncode');
const btnDecode = document.getElementById('btnDecode');
const btnClear = document.getElementById('btnClear');
const btnCopyText = document.getElementById('btnCopyText');
const btnCopyBase64 = document.getElementById('btnCopyBase64');
const errorMessage = document.getElementById('errorMessage');

// ENCODE: Dari Kiri (Teks) ke Kanan (Base64)
btnEncode.addEventListener('click', () => {
    const rawText = textInput.value;
    if (!rawText) return;

    try {
        // Fungsi bawaan JS btoa() untuk Encode
        const encodedText = btoa(unescape(encodeURIComponent(rawText))); 
        base64Input.value = encodedText;
        errorMessage.classList.add('hidden');
    } catch (error) {
        showError("Failed to encode text.");
    }
});

// DECODE: Dari Kanan (Base64) ke Kiri (Teks)
btnDecode.addEventListener('click', () => {
    const base64Text = base64Input.value;
    if (!base64Text) return;

    try {
        // Fungsi bawaan JS atob() untuk Decode
        const decodedText = decodeURIComponent(escape(atob(base64Text)));
        textInput.value = decodedText;
        errorMessage.classList.add('hidden');
    } catch (error) {
        showError("Invalid Base64 string!");
    }
});

function showError(msg) {
    errorMessage.innerText = msg;
    errorMessage.classList.remove('hidden');
}

btnClear.addEventListener('click', () => {
    textInput.value = '';
    base64Input.value = '';
    errorMessage.classList.add('hidden');
});

// Setup tombol Copy Kiri
btnCopyText.addEventListener('click', () => copyToClipboard(textInput.value, btnCopyText));

// Setup tombol Copy Kanan
btnCopyBase64.addEventListener('click', () => copyToClipboard(base64Input.value, btnCopyBase64));

function copyToClipboard(text, buttonElement) {
    if (!text) return;
    navigator.clipboard.writeText(text);
    const originalText = buttonElement.innerText;
    buttonElement.innerText = "Copied! ✅";
    setTimeout(() => {
        buttonElement.innerText = originalText;
    }, 2000);
}