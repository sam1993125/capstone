import { useState, useEffect } from 'react'
import WordList from "./database/wordlist"
import SearchBar from "./SearchBar"


function DatabaseContainer({ setCurrentUser, currentUser }) {

      const [search, setSearch] = useState("")
      const [words, setWords] = useState([])

      useEffect(() => {
        if (!search) return;
        fetch(`https://api.urbandictionary.com/v0/define?term=${search}`)
          .then((r) => r.json())
          .then(data => {
            // console.log(data)
            setWords(data.list)}
            )
        // console.log("I am being called")
      }, [search])



      const displayWords = words.filter((word) =>
        Object.values(word).join("_").toLowerCase().includes(search.toLowerCase())
      )

      return (
        <div style= {{display: "flex"}}>
          <SearchBar searchTerm={search} onSearchChange={setSearch} />
          <WordList words={displayWords}  setCurrentUser={setCurrentUser} currentUser={currentUser} />
        </div>
      )
    }

export default DatabaseContainer