# Inclusive Puzzle (Voice-enabled)

Project starter untuk puzzle digital yang mendukung Voice Recognition (Web Speech API) dan Text-to-Speech. Dirancang responsive untuk HP/tablet/desktop dan bisa dideploy ke Vercel.

Quick start:

1. Letakkan gambar puzzle (belum terpotong) pada `public/puzzle.jpg`.
   - Gambar sebaiknya berbentuk persegi (misal 1200x1200 px) untuk hasil terbaik. Situs akan menampilkan grid 4x4 dan tiap kepingan menampilkan bagian dari gambar.
   - Jika Anda belum punya file `puzzle.jpg`, ada placeholder `public/puzzle-placeholder.svg` yang bisa digunakan sementara.
2. Install dependencies:

```bash
npm install
```

3. Jalankan dev server:

```bash
npm run dev
```

Catatan fitur:
- Mode `Bacakan soal` (otomatis membacakan soal satu per satu dan menunggu jawaban suara).
- Mode `Baca sendiri` (user tekan keping/soal lalu menjawab dengan suara).
- Deteksi jawaban menggunakan Web Speech API (Chrome/Edge/Android Chrome mendukung paling baik).
- Saat jawaban benar, keping otomatis menandai sebagai tersusun.
- Pilihan waktu per soal (15s / 20s / 60s) tersedia di panel kontrol.
- Anda dapat generate QR dari halaman untuk dicetak di papan fisik.

Deploy ke Vercel:
- Buat repo GitHub dari folder ini dan push, lalu hubungkan ke Vercel. Vercel akan mendeteksi project Vite secara otomatis.

Opsi Firebase (opsional):
- Jika Anda ingin menyimpan skor/leaderboard di cloud, buat project Firebase dan tambahkan file `src/firebaseConfig.js` yang mengekspor config default, misalnya:

```js
// src/firebaseConfig.js
export default {
   apiKey: 'YOUR_API_KEY',
   authDomain: 'your-app.firebaseapp.com',
   projectId: 'your-project-id',
   // isi fields lain sesuai Firebase console
}
```

File `src/firebaseOptional.js` akan mencoba menginisialisasi Firebase jika file config ada. Saat ini leaderboard default menggunakan `localStorage`.

Langkah selanjutnya yang sudah saya implementasikan:
- Import soal via JSON di panel kontrol.
- Normalisasi pengucapan angka (Indonesia/Inggris) untuk pengenalan suara.
- Halaman admin untuk membuka halaman QR yang siap dicetak.
- Leaderboard sederhana menggunakan `localStorage`.

Jika ingin, saya bisa sekarang mengaktifkan Firebase integrasi penuh (menyimpan skor/leaderboard di Firestore) — beri tahu jika mau.
