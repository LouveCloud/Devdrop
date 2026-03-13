/**
 * DEVDROP MAIN SCRIPT
 * Mengatur interaktivitas pada halaman utama (index.html)
 */

// 1. KONFIGURASI DATA
// Pisahkan teks agar mudah diubah tanpa mencari ke dalam kode
const CONFIG = {
    codeSnippet: `const devDropTools = {
  "formatter": "JSON Formatter",
  "obfuscator": "JS Obfuscator",
  "decoder": "Base64 Tool",
  "status": "Ready for action! 🚀"
};`,
    typingSpeed: 10 // milidetik per karakter
};

// 2. MODUL ANIMASI (Typewriter)
const Typewriter = {
    element: document.getElementById('previewCode'),
    index: 0,

    init() {
        if (!this.element) return; // Keamanan jika elemen tidak ditemukan
        this.element.textContent = '';
        this.startTyping();
    },

    startTyping() {
        if (this.index < CONFIG.codeSnippet.length) {
            this.element.textContent += CONFIG.codeSnippet.charAt(this.index);
            this.index++;
            setTimeout(() => this.startTyping(), CONFIG.typingSpeed);
        }
    }
};

// 3. EVENT LISTENERS & INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
    // Jalankan efek mengetik pada Code Preview
    Typewriter.init();

    // Tambahkan logika scroll halus (Smooth Scroll) untuk navigasi internal
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});