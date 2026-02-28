// Optional Firebase initializer. To enable, create `src/firebaseConfig.js` that
// exports a default object with your Firebase config, e.g.:
// export default { apiKey: '...', authDomain: '...', projectId: '...', ... }
// If present, this module will initialize Firebase and export Firestore helper.
let firebaseApp = null
let db = null

export async function initFirebaseIfPresent() {
  try {
    // Vite/rollup attempts to resolve static dynamic imports at build time;
    // we hint that this path should be ignored so the absence of a file
    // doesn't break the build. runtime errors are caught below.
    const cfg = await import(/* @vite-ignore */ './firebaseConfig.js')
    if (!cfg?.default) return null
    const { initializeApp } = await import('firebase/app')
    const { getFirestore, collection, addDoc, getDocs, query, orderBy } = await import('firebase/firestore')
    firebaseApp = initializeApp(cfg.default)
    db = getFirestore(firebaseApp)
    // expose helpers
    return db
  } catch (e) {
    // no config or failed to load - silently ignore
    return null
  }
}

export function getDb() { return db }

export async function saveScoreToFirebase(entry) {
  try {
    if (!db) await initFirebaseIfPresent()
    if (!db) return null
    const { collection, addDoc } = await import('firebase/firestore')
    const col = collection(db, 'leaderboard')
    const doc = await addDoc(col, entry)
    return doc.id
  } catch (e) {
    console.warn('Firebase save failed', e)
    return null
  }
}

export async function fetchScoresFromFirebase(limit = 50) {
  try {
    if (!db) await initFirebaseIfPresent()
    if (!db) return []
    const { collection, getDocs, query, orderBy, limit: limitFn } = await import('firebase/firestore')
    const col = collection(db, 'leaderboard')
    const q = query(col, orderBy('date', 'desc'), limitFn(limit))
    const snap = await getDocs(q)
    return snap.docs.map(d => d.data())
  } catch (e) {
    console.warn('Firebase fetch failed', e)
    return []
  }
}
