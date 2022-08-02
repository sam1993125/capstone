import { useState, useEffect, useHistory } from 'react'
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
        console.log("I am being called:", data)
        setWords(data.list)
      })
  }, [search])
  
  return (
    <div>
      <SearchBar searchTerm={search} onSearchChange={setSearch} />
      <WordList words={words}
        // handleClick={handleClick}
        setCurrentUser={setCurrentUser} currentUser={currentUser} />
    </div>
  )
}

export default DatabaseContainer