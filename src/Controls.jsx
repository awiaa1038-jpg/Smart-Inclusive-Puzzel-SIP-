import React, { useState } from 'react'
import QRCode from 'qrcode'

export default function Controls({ timerMs, setTimerMs, setQuestions, setShowAdmin }) {
  const [qrDataUrl, setQrDataUrl] = useState(null)

  async function generateQr() {
    const url = window.location.href
    try {
      const dataUrl = await QRCode.toDataURL(url)
      setQrDataUrl(dataUrl)
    } catch (e) {
      console.error(e)
    }
  }

  function handleUpload(e) {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const json = JSON.parse(reader.result)
        if (Array.isArray(json) && json.length) {
          // normalize: ensure id, question, answer, number
          const parsed = json.map((it, idx) => ({
            id: it.id ?? idx,
            question: it.question ?? `Soal ${idx + 1}`,
            answer: Number(it.answer ?? it.number ?? 0),
            number: Number(it.number ?? it.answer ?? 0),
            targetIndex: idx
          }))
          setQuestions(parsed)
          alert('Soal berhasil diimpor')
        } else alert('Format file JSON tidak benar (harus array)')
      } catch (err) {
        alert('Gagal membaca file JSON')
      }
    }
    reader.readAsText(file)
  }

  function openAdmin() {
    setShowAdmin(true)
  }

  return (
    <div className="controls-panel">
      <div className="timer-select">
        <label>Waktu per soal:</label>
        <select value={timerMs} onChange={(e) => setTimerMs(Number(e.target.value))}>
          <option value={15000}>15 detik</option>
          <option value={20000}>20 detik</option>
          <option value={60000}>60 detik</option>
        </select>
      </div>

      <div>
        <label style={{marginRight:8}}>Import soal (JSON):</label>
        <input type="file" accept="application/json" onChange={handleUpload} />
      </div>

      <div className="qr-area">
        <button onClick={generateQr}>Generate QR untuk papan</button>
        <button style={{marginLeft:8}} onClick={openAdmin}>Halaman Admin/Print</button>
        {qrDataUrl && (
          <div className="qr-preview">
            <img src={qrDataUrl} alt="QR code" />
            <p>Scan QR ini dari papan untuk membuka game.</p>
          </div>
        )}
      </div>
    </div>
  )
}
