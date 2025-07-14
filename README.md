# 📧 Gmail Generator

Script sederhana untuk menghasilkan kombinasi alamat Gmail acak dengan berbagai metode (dot trick, plus trick, dan lainnya). Cocok digunakan untuk keperluan testing, pendaftaran massal, atau automasi.

[![GitHub Repo stars](https://img.shields.io/github/stars/Ridwan2809/gmail-generator?style=social)](https://github.com/Ridwan2809/gmail-generator/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Ridwan2809/gmail-generator?style=social)](https://github.com/Ridwan2809/gmail-generator/network)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
[![GitHub last commit](https://img.shields.io/github/last-commit/Ridwan2809/gmail-generator)](https://github.com/Ridwan2809/gmail-generator/commits/main)

---
## ✨ Fitur

- Generate alamat Gmail unik dari satu email utama
- Mendukung metode:
  - **Dot Trick**: `yourname@gmail.com` → `y.ourname@gmail.com`, `yo.urname@gmail.com`, dll
  - **Plus Trick**: `yourname+123@gmail.com`, `yourname+abc@gmail.com`
- Output dalam format file `.txt`
- Mudah digunakan di terminal/console
  
---

## 🚀 Instalasi

1. Clone repositori:

```
git clone https://github.com/Ridwan2809/gmail-generator.git
cd gmail-generator
```
```
node index.js
```

---

⚙️ Cara Pakai

▪️Jalankan script:
```
node index.js
```
▪️Masukkan email utama, contoh:```yourname@gmail.com```

▪️Pilih jumlah variasi alamat yang ingin dihasilkan

▪️Hasil akan disimpan di file ```output.txt```

---

📂 Contoh Output
Jika email utama: ```yourname@gmail.com```

Contoh hasil:
```
your.name@gmail.com
yo.urname@gmail.com
yourname+1@gmail.com
yourname+abc123@gmail.com
...
```

---

## 📄 Lisensi

Repositori ini dilisensikan di bawah [MIT License](LICENSE).

