const codeElement = document.getElementById('previewCode');
const codeText = `const devDropTools = {
  "formatter": "JSON Formatter",
  "obfuscator": "JS Obfuscator",
  "decoder": "Base64 Tool",
  "status": "Ready for action! 🚀"
};`;

let i = 0;
function typeCode() {
    if (i < codeText.length) {
        codeElement.textContent += codeText.charAt(i);
        i++;
        setTimeout(typeCode, 50); // Kecepatan ketik
    }
}

// Jalankan efek saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    codeElement.textContent = ''; // Kosongkan dulu
    typeCode();
});