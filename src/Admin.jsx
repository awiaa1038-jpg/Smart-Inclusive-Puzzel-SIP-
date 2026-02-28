import React from 'react'
import QRCode from 'qrcode'

export default function Admin({ onClose }) {
  async function printQrPage() {
    const url = window.location.origin + window.location.pathname
    const dataUrl = await QRCode.toDataURL(url)
    const win = window.open('', '_blank')
    if (!win) return alert('Pop-up blocked')
    const html = `
      <html>
      <head>
        <title>Printable QR</title>
        <style>body{font-family:Arial;padding:24px} .sheet{width:100%;display:flex;justify-content:center;align-items:center;height:100vh} img{width:320px;height:320px}</style>
      </head>
      <body>
        <div class="sheet">
          <div>
            <img src="${dataUrl}" alt="QR" />
            <p style="text-align:center">Scan untuk buka puzzle</p>
          </div>
        </div>
      </body>
      </html>`
    win.document.write(html)
    win.document.close()
    win.focus()
    setTimeout(() => { win.print() }, 500)
  }

  return (
    <div style={{padding:12}}>
      <h2>Halaman Admin - QR Cetak</h2>
      <p>Gunakan tombol di bawah untuk membuka halaman yang bisa dicetak (A4) berisi QR code.</p>
      <div style={{display:'flex',gap:8}}>
        <button onClick={printQrPage}>Buka halaman cetak QR</button>
        <button onClick={onClose}>Kembali</button>
      </div>
    </div>
  )
}
