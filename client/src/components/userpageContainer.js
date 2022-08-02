import { useState, useEffect } from 'react'
import WordList from "./userpage/wordlist"
import { NavLink } from "react-router-dom";
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import styled from '@emotion/styled'

function UserpageContainer({ setCurrentUser, currentUser }) {

  const [words, setWords] = useState([])

  useEffect(() => {
    fetch(`/users/${currentUser.id}/words`)
      .then((r) => r.json())
      .then(data => 
        // console.log("I am being called",data)
        setWords(data)
      ) 
  }, [])

  // console.log("I am being called", words)

  
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
      <WordList words={words} setCurrentUser={setCurrentUser} currentUser={currentUser} handleDelete={handleDelete} />
      {words.length > 0 ? (null
      ) : (
          <Margin>
            <Button><NavLink to="/database" style={({ "text-decoration": "none", "color": "#018A9F", })}>Add Your Word!</NavLink></Button>
          </Margin>
      )} 
    </div>
  )
}

const Button = styled.button`
  margin: auto;
  padding: 60px;
  background-color: #f5ffe3;
  font-family: 'Mouse Memoirs', sans-serif;
  font-size: 24px;
  border-radius: 4px;
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
margin-top: 20px;
      @media screen and (max-width: 748px){
        display: flex;
        height: auto;
    }
    
`
export default UserpageContainer