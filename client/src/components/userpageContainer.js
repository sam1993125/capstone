import { useState, useEffect } from 'react'
import WordList from "./userpage/wordlist"

function UserpageContainer({ setCurrentUser, currentUser }) {

  const [words, setWords] = useState([])

    useEffect(() => {
      fetch(`/userwords`)
        .then((r) => r.json())
        .then(data => setWords(data))
      // console.log("I am being called")
    }, [])
    
    // console.log(words)

    
  // const displayWords = words.filter((word) =>
  //   Object.values(word).join("_").toLowerCase().includes(search.toLowerCase())
  // )

  return (
    <div>
      <WordList words={words} setCurrentUser={setCurrentUser} currentUser={currentUser} />
      </div>

      
  )
}

export default UserpageContainer