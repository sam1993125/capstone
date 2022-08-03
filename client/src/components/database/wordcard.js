import React, { useState } from 'react'
import {useHistory } from 'react-router-dom'
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import styled from '@emotion/styled'

function WordCard({id, aword, setCurrentUser, currentUser }) {
    const { word, definition, example, author, written_on } = aword

    const [singleword, setSingleword] = useState()
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory()

    // console.log(typeof written_on)

  function handleClick() {
      console.log({
          name: aword.word,
          definition: aword.definition,
          example: aword.example,
          author: aword.author,
          written_on: aword.written_on,
      })
      fetch(`/users/${currentUser.id}/words`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: aword.word,
                definition: aword.definition,
                example: aword.example,
                author: aword.author,
                written_on: aword.written_on,
            }),
        })
      .then((r) => {
        setIsLoading(false);
        if (r.ok) {
            //sr.json()
            //   console.log(r.json());
            // .then(data => setSingleword(data))   
            // (pessimistic rendering)
            setSingleword(aword)
            // (optimistic rendering)
              history.push("/");
        } else {
          r.json()
            .then((err) => setErrors(err.errors));
        }
      })
  }

    return (
        <Box>
          <ul>
            <div style={{ display: 'flex', justifyContent: "space-between"}}>
            <h4 style={{ fontFamily: 'Mouse Memoirs'}}>{word}</h4>
            <Button onClick={() => handleClick()}>ADD IT</Button>
            </div>
          <Prgh>{definition.replace(/\[|\]|"/g, "")}</Prgh>
          <Prgh>{example.replace(/\[|\]|"/g, "")}</Prgh>
          <Prgh>{author}</Prgh>
          <Prgh>{written_on.slice(0, written_on.indexOf('T'))}</Prgh>
        </ul>
         </Box >
    )
}

const Box = styled.div`
 transition: box-shadow 0.5s;
  width: 80%;
  align-item: center;
  margin-left: 40px;
  margin-bottom: 30px;
  border-radius: 10px;
  border-right: 0.1px #f5ffe3;
  border-bottom: 5px #f5ffe3;
  background: #f5ffe3;
  padding: 5px;
  border-color:rgba(22, 33, 33, 1);
  display: grid;
  grid-gap: 10px;
  &:hover {
     box-shadow: 5px 5px rgba(1, 138, 159, 0.5);
  }
@media (min-width: 748px) {
    width: calc(70% - 2rem);
}
}
`
const Prgh = styled.p`
  text-align: justify ;
  margin-right: 30px;
  font-family: 'Roboto Condensed', sans-serif;
`

const Button = styled.button`
  padding: 10px;
  margin:10px;
  background: rgba(1,138,159, 0.6);
  font-family: 'Mouse Memoirs', sans-serif;
  font-size: 24px;
  border-radius: 4px;
  font-weight: bold;
  color: white; 
  border-color :#f5ffe3;
  border-width: 1px;
  text-decroration: none;
  cursor: pointer;
  transition: box-shadow 0.5s;
  &:hover {
    box-shadow: 5px 5px rgba(22, 33, 33, 0.1);
  }
  @media screen and (max-width: 748px){
        text-align: center;
        margin-right: 0px;
        padding: 20px 0;
         &:hover {
     box-shadow: none
  }
    }
}
`


export default WordCard