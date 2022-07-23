import { useState, useEffect } from 'react'
import WordList from "./database/WordList"
import SearchBar from "./SearchBar"


function DatabaseContainer({ setCurrentUser, currentUser }) {

      const [search, setSearch] = useState("Play Play")
      const [words, setWords] = useState([])

      useEffect(() => {
        fetch(`https://api.urbandictionary.com/v0/define?term=${search}`)
          .then((r) => r.json())
          .then(data => setWords(data.list))
        console.log("I am being called")
      }, [])

  console.log(words)

      return (
        <div>
          <WordList words={words}  setCurrentUser={setCurrentUser} currentUser={currentUser} />
          <SearchBar />
        </div>
      )
    }

export default DatabaseContainer