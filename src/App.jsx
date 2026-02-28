import React, { useState } from 'react'
import PuzzleGrid from './PuzzleGrid'
import { QUESTIONS as DEFAULT_QUESTIONS } from './data'
import Controls from './Controls'
import Leaderboard from './Leaderboard'
import Admin from './Admin'

export default function App() {
  const [mode, setMode] = useState('read-aloud') // 'read-aloud' or 'self-read'
  const [questions, setQuestions] = useState(DEFAULT_QUESTIONS)
  const [showAdmin, setShowAdmin] = useState(false)

  function handleComplete(score) {
    // pass to leaderboard (Leaderboard reads storage)
    const entry = { score, date: new Date().toISOString() }
    const key = 'inclusive-puzzle-leaderboard'
    const raw = localStorage.getItem(key)
    const list = raw ? JSON.parse(raw) : []
    list.push(entry)
    localStorage.setItem(key, JSON.stringify(list))
  }

  return (
    <div className="app">
      <header>
        <h1>Smart Inclusive Puzzle</h1>
        <div className="mode-select">
          <label>
            <input
              type="radio"
              name="mode"
              checked={mode === 'read-aloud'}
              onChange={() => setMode('read-aloud')}
            />
            Bacakan soal
          </label>
          <label>
            <input
              type="radio"
              name="mode"
              checked={mode === 'self-read'}
              onChange={() => setMode('self-read')}
            />
            Baca sendiri
          </label>
        </div>
      </header>

      <Controls setShowAdmin={setShowAdmin} />

      {showAdmin ? (
        <Admin onClose={() => setShowAdmin(false)} />
      ) : (
        <>
          <main>
            <PuzzleGrid questions={questions} mode={mode} onComplete={handleComplete} />
          </main>

          <aside>
            <Leaderboard />
          </aside>
        </>
      )}
    </div>
  )
}
