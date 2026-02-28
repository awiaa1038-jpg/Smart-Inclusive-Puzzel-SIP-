// Sample dataset for 16 puzzle pieces. Each piece has id (0-15), question, answer, and number (displayed on piece).
export const QUESTIONS = Array.from({ length: 16 }).map((_, i) => {
  const a = Math.floor(Math.random() * 9) + 1
  const b = Math.floor(Math.random() * 9) + 1
  return {
    id: i,
    question: `Berapa ${a} + ${b}?`,
    answer: a + b,
    number: a + b,
    targetIndex: i
  }
})

// NOTE: you can replace questions by uploading a JSON array from Controls
