// Fungsi untuk menghasilkan variasi dengan titik
function generateDotVariants(username) {
    const variants = new Set([username]); // Mulai dengan username asli
    if (username.length > 10) { // Batasi panjang untuk performa
        // Untuk username panjang, hanya tambahkan beberapa variasi representatif
        for (let i = 1; i < username.length; i++) {
            variants.add(username.slice(0, i) + '.' + username.slice(i));
        }
        return Array.from(variants);
    }

    // Algoritma bitmask untuk menghasilkan semua kemungkinan variasi titik
    const n = username.length - 1;
    for (let i = 1; i < (1 << n); i++) {
        let newVariant = username[0];
        for (let j = 0; j < n; j++) {
            if ((i >> j) & 1) {
                newVariant += '.';
            }
            newVariant += username[j + 1];
        }
        variants.add(newVariant);
    }
    return Array.from(variants);
}

// Fungsi utama untuk menghasilkan semua variasi
function generate() {
    const usernameInput = document.getElementById("username");
    const tagsInput = document.getElementById("tags");
    const resultTextarea = document.getElementById("result");

    const username = usernameInput.value.trim().toLowerCase().replace(/\./g, ''); // Hapus titik yang ada
    if (!username || /[^a-z0-9]/.test(username)) {
        alert("Harap masukkan nama pengguna Gmail yang valid (hanya huruf dan angka, tanpa '@gmail.com').");
        return;
    }

    const tags = tagsInput.value.trim().split(',').map(t => t.trim()).filter(Boolean);
    const finalVariations = new Set();

    const dotVariations = generateDotVariants(username);

    dotVariations.forEach(variant => {
        // Tambahkan variasi dasar (dengan dan tanpa titik)
        finalVariations.add(`${variant}@gmail.com`);

        // Tambahkan variasi dengan tag
        tags.forEach(tag => {
            finalVariations.add(`${variant}+${tag}@gmail.com`);
        });
    });

    resultTextarea.value = Array.from(finalVariations).join('\n');
}

// Fungsi untuk mereset input dan hasil
function resetInput() {
    document.getElementById("username").value = "";
    document.getElementById("tags").value = "";
    document.getElementById("result").value = "";
}

// Fungsi untuk menyalin hasil ke clipboard
function copyResult() {
    const resultTextarea = document.getElementById("result");
    if (!resultTextarea.value) {
        alert("Tidak ada hasil untuk disalin.");
        return;
    }

    navigator.clipboard.writeText(resultTextarea.value)
        .then(() => {
            alert("✅ Berhasil disalin ke clipboard!");
        })
        .catch(err => {
            console.error('Gagal menyalin: ', err);
            alert("Gagal menyalin ke clipboard. Coba lagi secara manual.");
        });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('generateBtn').addEventListener('click', generate);
    document.getElementById('resetBtn').addEventListener('click', resetInput);
    document.getElementById('copyBtn').addEventListener('click', copyResult);
});