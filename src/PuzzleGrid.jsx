import React, { useEffect, useState, useRef } from 'react'
import { saveScoreToFirebase } from './firebaseOptional'

function speak(text) {
  if (!window.speechSynthesis) return
  const u = new SpeechSynthesisUtterance(text)
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(u)
}

// Improved Indonesian + English spoken-number parser (basic)
function parseIndoNumberWords(text){
  if(!text) return NaN
  const t = text.toLowerCase().replace(/[^a-z0-9\s-]/g,' ').trim()
  const units = {
    nol: 0,
    kosong: 0,
    satu: 1,
    due: 2,
    duea: 2, // possible mis-spellings
    dua: 2,
    tiga: 3,
    empat: 4,
    lima: 5,
    enam: 6,
    tujuh: 7,
    delapan: 8,
    sembilan: 9
  }
  const specials = { sepuluh:10,sebelas:11,belas:10 }
  // simple english map
  const enUnits = { zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12 }

  // direct digits
  const digits = text.match(/\d+/)?.[0]
  if(digits) return Number(digits)

  // handle 'dua puluh tiga' or 'twenty three' roughly
  // try indonesian
  if(/puluh|belas|sepuluh|sebelas/.test(t)){
    const parts = t.split(/\s+/)
    let value = 0
    for(let i=0;i<parts.length;i++){
      const w = parts[i]
      if(w === 'sebelas') { value += 11; continue }
      if(w === 'sepuluh') { value += 10; continue }
      if(w === 'belas') { value += 10; continue }
      if(w === 'puluh') {
        const prev = parts[i-1]
        const pv = units[prev] ?? enUnits[prev] ?? 0
        value += pv * 10
        continue
      }
      const u = units[w] ?? enUnits[w]
      if(typeof u === 'number') value += u
    }
    if(value>0) return value
  }

  // fallback: scan all words for a known number (handles "number satu", "dua please", etc.)
  const parts = t.split(/\s+/)
  for(const w of parts){
    if(units[w] !== undefined) return units[w]
    if(enUnits[w] !== undefined) return enUnits[w]
  }
  return NaN
}

function normalizeSpokenNumber(text){
  if(!text) return NaN
  const v = parseIndoNumberWords(text)
  if(!isNaN(v)) return v
  return NaN
}

function createRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  if (!SpeechRecognition) return null
  const r = new SpeechRecognition()
  r.lang = 'id-ID'
  // we only expect one result per start call, don't keep listening
  r.interimResults = false
  r.maxAlternatives = 1
  r.continuous = false
  r.onerror = (e) => {
    console.warn('speech recognition error', e)
  }
  return r
}

const POSSIBLE_IMAGES = [
  '/Smart Inclusive Puzzle (SIP) (1).png',
  '/Smart%20Inclusive%20Puzzle%20(SIP)%20(1).png',
  '/puzzle.jpg',
  '/puzzle.png',
  '/puzzle.jpeg',
  '/puzzle-placeholder.svg'
]

async function findFirstExistingImage(list){
  for(const p of list){
    const url = encodeURI(p)
    try{
      // try load image
      await new Promise((res, rej)=>{
        const img = new Image()
        img.onload = () => res(true)
        img.onerror = () => rej(false)
        img.src = url
      })
      return url
    }catch(e){/* try next */}
  }
  return ''
}

export default function PuzzleGrid({ questions, mode, onComplete }) {
  const [pieces, setPieces] = useState(
    questions.map((q) => ({ ...q, placed: false }))
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const [gameStage, setGameStage] = useState('idle') // idle, confirm, countdown, playing, done
  const [countdownSec, setCountdownSec] = useState(5)
  const recognitionRef = useRef(null)
  const placedOrderRef = useRef([]) // track placement order of piece ids
  // useRef allows us to refer to latest state in the handler without
  // needing to recreate the recognition object constantly
  const timerRef = useRef(null)
  const [imageUrl, setImageUrl] = useState('/puzzle-placeholder.svg')
  const [srMessage, setSrMessage] = useState('')
  const [lastSpeech, setLastSpeech] = useState('')
  const TIME_PER_QUESTION = 160000 // 2m40s fixed

  useEffect(()=>{
    findFirstExistingImage(POSSIBLE_IMAGES).then(u=>{ if(u) setImageUrl(u) })
    // greeting on entry
    setTimeout(()=>{
      speakAndAnnounce('Selamat datang di Smart Inclusive Puzzle')
      setTimeout(()=>{
        speakAndAnnounce('Apakah Anda siap untuk memulai?')
        setGameStage('confirm')
        startListening()
      }, 1500)
    }, 500)
  },[])

  // create recognition once on mount; we will update its onresult callback
  // whenever the relevant state changes. doing this prevents a race where the
  // user clicks "Mulai Soal" before the effect runs, which previously left
  // recognitionRef.current null and the startListening call did nothing.
  useEffect(() => {
    recognitionRef.current = createRecognition()
    return () => {
      if (recognitionRef.current) recognitionRef.current.stop()
      clearTimeout(timerRef.current)
    }
  }, [])

  // old autoplay effect removed; we manage questions via startGame/nextQuestion

  function speakAndAnnounce(text){
    // if user selected self-read mode, remain entirely silent (just update
    // the screen-reader message) and never call speechSynthesis.
    if(mode === 'self-read'){
      setSrMessage(text)
      return
    }
    setSrMessage(text)
    speak(text)
  }

  // control flow helpers
  function startGame(){
    if(gameStage !== 'idle') return
    setGameStage('confirm')
    speakAndAnnounce('Mulai sekarang?')
    startListening()
  }

  function startCountdown(){
    setGameStage('countdown')
    let sec = 5
    function tick(){
      if(sec < 0){
        setGameStage('playing')
        nextQuestion()
        return
      }
      speakAndAnnounce(String(sec))
      sec--
      setTimeout(tick, 1000)
    }
    tick()
  }

  function nextQuestion(){
    const unplaced = pieces.filter(p => !p.placed)
    if(!unplaced || unplaced.length === 0){
      speakAndAnnounce('Semua soal selesai. Terima kasih!')
      setGameStage('done')
      return
    }
    setGameStage('playing')
    // choose a random unplaced piece to ask
    const pick = unplaced[Math.floor(Math.random() * unplaced.length)]
    const qIndex = pieces.findIndex(p => p.id === pick.id)
    setCurrentIndex(qIndex)
    const q = pieces[qIndex]
    speakAndAnnounce(q.question)
    startListening()
    // per request: 2 minutes 40 seconds = 160000ms
    timerRef.current = setTimeout(() => {
      speakAndAnnounce('Waktu habis, mulai ulang dari awal')
      // on timeout, roll back last two placed pieces like a wrong answer
      const toUnplace = []
      for(let i=0;i<2;i++){
        const lastId = placedOrderRef.current.pop()
        if(lastId !== undefined) toUnplace.push(lastId)
      }
      if(toUnplace.length){
        setPieces(prev => prev.map(p => toUnplace.includes(p.id) ? ({ ...p, placed:false, question: makeRandomSumQuestion(p), answer: makeRandomSumAnswer(p) }) : p))
      }
      setTimeout(() => nextQuestion(), 600)
    }, 160000)
  }

  function isAffirmative(txt){
    if(!txt) return false
    const t = txt.toLowerCase()
    // accept a handful of affirmative tokens including some english words
    return /\b(iya|ya|mulai|siap|ready|oke|ok|yes|start)\b/.test(t)
  }

  function restartGame(){
    // reset pieces and index
    setPieces((prev)=>prev.map(p=>({ ...p, placed:false })))
    placedOrderRef.current = []
    setCurrentIndex(0)
    setGameStage('idle')
  }

  function startAutoPlay() {
    // deprecated in new flow; kept for compatibility
    if (currentIndex >= pieces.length) return
    const p = pieces[currentIndex]
    if (p.placed) {
      setCurrentIndex((i) => i + 1)
      return
    }
    speakAndAnnounce(p.question)
    startListening()
    // legacy autoplay timeout not used
    // timerRef.current = setTimeout(() => {
    //   stopListening()
    //   setCurrentIndex((i) => i + 1)
    // }, timerMs)
  }

  function ensureRecognition() {
    if (!recognitionRef.current) {
      recognitionRef.current = createRecognition()
    }
    return recognitionRef.current
  }

  function startListening(){
    const r = ensureRecognition()
    if(!r){
      console.warn('speech recognition not supported')
      setSrMessage('Speech recognition tidak tersedia di peramban ini')
      return
    }
    try{ r.start() }catch(e){ console.warn('could not start speech recognition',e) }
  }
  function stopListening() {
    const r = recognitionRef.current
    try {
      if (r) r.stop()
    } catch (e) {
      console.warn('could not stop recognition', e)
    }
  }

  // We will wrap this in useCallback so we can update the recognition
  // object's onresult whenever it changes without recreating the object.
  const handleVoiceResult = React.useCallback((text) => {
    console.log('voiceResult', text, gameStage)
    if(gameStage === 'confirm'){
      if(isAffirmative(text)){
        startCountdown()
      } else {
        speakAndAnnounce('Silakan tekan tombol jika ingin mulai')
      }
    } else if(gameStage === 'playing'){
      const q = pieces[currentIndex]
      if(!q) return
      const num = normalizeSpokenNumber(text)
      const correct = typeof q.answer === 'number' ? (num === q.answer) : (q.answer === true ? !!text.trim() : text.toLowerCase().includes(String(q.answer).toLowerCase()))
      if(correct){
        stopListening()
        speakAndAnnounce('Anda benar')
        placePiece(q.id)
        placedOrderRef.current.push(q.id)
        clearTimeout(timerRef.current)
        // continue with next random unplaced piece
        nextQuestion()
      } else {
        // wrong: remove last two placed pieces (if any) and regenerate them
        speakAndAnnounce('Maaf anda salah, ulang 2 keping terakhir')
        const toUnplace = []
        for(let i=0;i<2;i++){
          const lastId = placedOrderRef.current.pop()
          if(lastId !== undefined) toUnplace.push(lastId)
        }
        if(toUnplace.length){
          setPieces(prev => prev.map(p => toUnplace.includes(p.id) ? ({ ...p, placed:false, question: makeRandomSumQuestion(p), answer: makeRandomSumAnswer(p) }) : p))
        }
        // ask next random unplaced
        setTimeout(() => {
          nextQuestion()
        }, 800)
      }
    }
  }, [pieces, currentIndex, gameStage])

  function placePiece(id) {
    setPieces((prev) => {
      const next = prev.map((p) => (p.id === id ? { ...p, placed: true } : p))
      if(next.every(x=>x.placed)){
        const score = next.filter(x=>x.placed).length
        const entry = { score, date: new Date().toISOString() }
        // localStorage already handled in App; also try Firebase
        saveScoreToFirebase(entry).catch(()=>{})
        if(typeof onComplete === 'function') onComplete(score)
      }
      return next
    })
  }

  // helpers to generate random sum questions for regeneration after wrong
  function makeRandomSumQuestion(p){
    const a = Math.floor(Math.random()*9)+1
    const b = Math.floor(Math.random()*9)+1
    return `Berapa ${a} + ${b}?`
  }
  function makeRandomSumAnswer(p){
    const match = /Berapa (\d+) \+ (\d+)\?/.exec(p.question || '')
    if(match) return Number(match[1]) + Number(match[2])
    // fallback random
    const a = Math.floor(Math.random()*9)+1
    const b = Math.floor(Math.random()*9)+1
    return a + b
  }

  // `idx` is the index in the `pieces` array. the previous implementation
  // treated the parameter as an `id` and then searched for it with
  // `find`. that worked only when `id === index` which isn't guaranteed
  // when questions are imported with custom ids. using the index directly
  // avoids potential mismatch/undefined behavior.
  function handleManualAnswer(idx) {
    const p = pieces[idx]
    if (!p) return
    speakAndAnnounce(p.question)
    if (mode === 'self-read') startListening()
  }

  const gridSize = 4

  // whenever our voice handler changes (due to state updates), reassign it
  // to the recognition object so it sees the fresh closure
  useEffect(() => {
    const r = recognitionRef.current
    if (r) {
      r.onresult = (e) => {
        if (e.results && e.results.length > 0) {
          const txt = e.results[0][0].transcript.trim()
          console.log('Speech recognized:', txt)
          setLastSpeech(txt)
          handleVoiceResult(txt)
        }
      }
      // restart recognition automatically if it ends while we are in relevant stages
      r.onend = () => {
        if(gameStage === 'confirm' || gameStage === 'playing'){
          try{ r.start() }catch(e){}
        }
      }
      r.onerror = (e) => {
        console.warn('recognition error', e)
        setSrMessage('Masalah mikrofon, silakan periksa')
      }
    }
  }, [handleVoiceResult])

  // Do not auto-manage listening here; voice control is started explicitly
  // via the `startGame()` / `startCountdown()` flows to avoid ambient
  // mis-detections. This space is intentionally left blank.

  function handleKeyDown(e, idx){
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault()
      handleManualAnswer(idx)
    }
  }

  // separate placed and unplaced pieces
  const unplacedPieces = pieces.filter(p => !p.placed)
  const placedMap = {}
  pieces.forEach(p => {
    if (p.placed && p.targetIndex !== undefined) {
      placedMap[p.targetIndex] = p
    }
  })

  return (
    <div className="puzzle-wrapper">
      <div aria-live="polite" role="status" className="sr-only">{srMessage}</div>
      <div className="debug-speech">{lastSpeech}</div>
      
      <div className="puzzle-board" role="application" aria-label="Puzzle board">
        {Array.from({ length: 16 }).map((_, gridIdx) => {
          const piece = placedMap[gridIdx]
          if (!piece) {
            return <div key={`empty-${gridIdx}`} className="puzzle-slot-empty" aria-label={`Posisi ${gridIdx + 1} kosong`}></div>
          }
          
          const row = Math.floor(gridIdx / gridSize)
          const col = gridIdx % gridSize
          const bgX = (-col * 25) + '%'
          const bgY = (-row * 25) + '%'
          
          return (
            <div
              key={piece.id}
              className="puzzle-piece placed"
              style={{
                backgroundImage: `url('${imageUrl}')`,
                backgroundSize: '400% 400%',
                backgroundPosition: `${bgX} ${bgY}`
              }}
              aria-label={`Keping ${piece.number} tersusun di posisi ${gridIdx + 1}`}
            >
              <div className="overlay">
                <div className="number">{piece.number}</div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="hand-area">
        <div className="hand-label">Kepingan untuk menjawab:</div>
        <div className="hand-pieces">
          {unplacedPieces.map((p, uIdx) => {
            const row = Math.floor(p.targetIndex / gridSize)
            const col = p.targetIndex % gridSize
            const bgX = (-col * 25) + '%'
            const bgY = (-row * 25) + '%'
            return (
              <div
                key={p.id}
                className="puzzle-piece-hand"
                style={{
                  backgroundImage: `url('${imageUrl}')`,
                  backgroundSize: '400% 400%',
                  backgroundPosition: `${bgX} ${bgY}`
                }}
                aria-label={`Keping dengan angka ${p.number}, soal: ${p.question}`}
              >
                <div className="number">{p.number}</div>
                <button className="qbtn" aria-hidden>Soal</button>
              </div>
            )
          })}
        </div>
      </div>


      {pieces.every((p) => p.placed) && (
        <div className="complete">Selamat! Semua keping tersusun.</div>
      )}
    </div>
  )
}


