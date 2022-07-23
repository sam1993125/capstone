import { useState, useEffect } from 'react'
import WordList from "./userpage/WordList"

function UserpageContainer({ setCurrentUser, currentUser }) {

  const [words, setWords] = useState([])

    useEffect(() => {
      fetch(`/userwords`)
        .then((r) => r.json())
        .then(data => setWords(data))
      console.log("I am being called")
    }, [])
    
    console.log(words)

  return (
    <div>
      <WordList words={words} setCurrentUser={setCurrentUser} currentUser={currentUser} />
      </div>
  )
}

export default UserpageContainer