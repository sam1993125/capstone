import { useState, useEffect } from 'react'
import WordList from "./userpage/wordlist"
import SearchBar from "./SearchBar"
// import giphy from "./giphy.gif"
import { NavLink } from "react-router-dom";
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import styled from '@emotion/styled'

function UserpageContainer({ setCurrentUser, currentUser }) {

  const [words, setWords] = useState([])
  // const [search, setSearch] = useState("")
  const [userwords, setUserwords] = useState([])

  // const [tags, setTags] = useState([])

    useEffect(() => {                     
      fetch(`/users/${currentUser.id}/words`)
        .then((r) => r.json())
        .then(data => 
          // console.log("I am being called",data)
          setWords(data)
        )
    }, [])  


  // useEffect(() => {
  //   fetch(`/users/${currentUser.id}/userwords`)
  //     .then((r) => r.json())
  //     .then(data =>
  //       // console.log("I am being called",data)
  //       setUserwords(data)
  //     )
  // }, [])  
  // console.log(userwords.tags)
  
  // const selecttags = userwords.filter((tag) =>Object.values(tag).join("_").toLowerCase().includes(search.toLowerCase())) 
  
  // const selecttags  = userwords.filter(tag => console.log(tag.filter))

  // selecttags.filter(t => console.log(t))


  function handleDelete(id) {
    console.log(id)
    fetch(`/userwords/${id}`, { 
      method: "DELETE",                   
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({        
        user_id: currentUser.id,
        word_id: id
      })
    })
      .then(r => {
        if (r.ok) {
          setWords(words => words.filter(word => word.id !== id))
        }
      })
  }

  return (
    <div>
    
      {words.length > 0 ? (null
      // <SearchBar searchTerm={search} onSearchChange={setSearch} />
      ) : (
        <Margin>
            <Button><NavLink to="/database" style={({ "text-decoration": "none", "color": "white" })}>Add Your Slangs!</NavLink></Button>

          </Margin>
      )} 
      <WordList words={words} setCurrentUser={setCurrentUser} currentUser={currentUser} handleDelete={handleDelete} />
    </div>
  )
}

const Button = styled.button`
  margin: auto;
  padding: 100px;
  background-image: url('https://s4.gifyu.com/images/giphyc80ae61a12e8e2a5.gif');
    background-size: cover;
  font-family: 'Mouse Memoirs', sans-serif;
  font-size: 24px;
  border-radius: 10px;
  font-weight: bold;
  border-color :#f5ffe3;
  border-width: 1px;
  text-decroration: none;
  cursor: pointer;
  transition: box-shadow 0.5s;

  &:hover {
     box-shadow: 5px 5px rgba(22, 33, 33, 0.1);
  }

`
const Margin = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
      @media screen and (max-width: 748px){
        display: flex;
        height: auto;
 
    }
    
`


export default UserpageContainer