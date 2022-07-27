import { useState, useEffect } from 'react'
import WordList from "./userpage/wordlist"

function UserpageContainer({ setCurrentUser, currentUser }) {

  const [words, setWords] = useState([])

  useEffect(() => {
    fetch(`/users/${currentUser.id}/words`)
      .then((r) => r.json())
      .then(data => 
      setWords(data))
      
    // console.log("I am being called")
  }, [])

  console.log("I am being called", words)

  // console.log(words)
  
  function handleDelete(id) {
    console.log(id)
    fetch(`/userwords/${id}`, { method: "DELETE" })
    
      .then(r => {
        if (r.ok) {
          setWords(words => words.filter(word => word.id != id))
        }
      })
  }

  return (
    <div>
      <WordList words={words} setCurrentUser={setCurrentUser} currentUser={currentUser} handleDelete={handleDelete} />
    </div>


  )
}

export default UserpageContainer