import React, { useEffect, useState } from 'react'
import { initFirebaseIfPresent, fetchScoresFromFirebase } from './firebaseOptional'

export default function Leaderboard() {
  const [list, setList] = useState([])
  const [remoteList, setRemoteList] = useState(null)

  useEffect(() => {
    const raw = localStorage.getItem('inclusive-puzzle-leaderboard')
    setList(raw ? JSON.parse(raw) : [])
    // try initialize firebase (optional)
    initFirebaseIfPresent().then((db) => {
      if (db) {
        fetchScoresFromFirebase(50).then(data => setRemoteList(data))
      }
    })
  }, [])

  const displayed = remoteList && remoteList.length ? remoteList : list.slice().reverse()

  return (
    <div className="leaderboard">
      <h3>Leaderboard</h3>
      {!displayed || displayed.length === 0 ? (
        <p>Belum ada skor. Mainkan sekali untuk menyimpan skor.</p>
      ) : (
        <ol>
          {displayed.map((e, i) => (
            <li key={i}>{e.score} pts — {new Date(e.date).toLocaleString()}</li>
          ))}
        </ol>
      )}
    </div>
  )
}
