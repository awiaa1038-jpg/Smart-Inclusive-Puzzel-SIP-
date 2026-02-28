import React, { useState } from 'react'
import QRCode from 'qrcode'

export default function Controls({ setShowAdmin }) {
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


  function openAdmin() {
    setShowAdmin(true)
  }

  return (
    <div className="controls-panel">

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
