// Fixed set of six questions as requested by user. Each item includes
// an answer which is either a number or `true` to indicate any spoken
// response counts as correct. `targetIndex` determines which puzzle slot the
// piece will occupy when correctly answered.
export const QUESTIONS = [
  {
    id: 0,
    question: `Bu membeli 3 kotak telur. Setiap kotak berisi 12 butir telur. Jika Ibu menggunakan 15 butir telur untuk membuat kue, berapa sisa telur yang dimiliki Ibu sekarang?`,
    answer: 21,
    number: 1,
    targetIndex: 0
  },
  {
    id: 1,
    question: `Bayangkan kamu memiliki sebuah robot ajaib yang bisa membantumu di rumah. Tuliskan 3 hal yang ingin kamu suruh robot itu lakukan dan berikan alasannya!`,
    answer: true,
    number: 2,
    targetIndex: 1
  },
  {
    id: 2,
    question: `Mengapa tumbuhan sangat penting bagi kehidupan manusia dan hewan di bumi? Sebutkan setidaknya dua alasan yang kamu ketahui!`,
    answer: true,
    number: 3,
    targetIndex: 2
  },
  {
    id: 3,
    question: `Andi mulai belajar pada pukul 18.30 dan selesai pada pukul 20.15. Berapa menit total waktu yang dihabiskan Andi untuk belajar? Tunjukkan langkah-langkah hitungannya!`,
    answer: 105,
    number: 4,
    targetIndex: 3
  },
  {
    id: 4,
    question: `Jika kamu melihat seorang teman yang sedang sedih karena kehilangan pensil kesayangannya di kelas, apa yang akan kamu lakukan untuk menghiburnya?`,
    answer: true,
    number: 5,
    targetIndex: 4
  },
  {
    id: 5,
    question: `Sebutkan 3 nama provinsi di Indonesia beserta nama ibu kotanya masing-masing yang kamu ketahui!`,
    answer: true,
    number: 6,
    targetIndex: 5
  }
]

// NOTE: you can replace questions by uploading a JSON array from Controls
