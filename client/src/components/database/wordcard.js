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
                <h4 style={{ fontFamily: 'Kavoon, cursive' }}>{word}</h4>
                <button onClick={() => handleClick()}>➕</button>
            </div>
                <p>{definition.replace(/\[|\]|"/g, "")}</p>
                <p>{example.replace(/\[|\]|"/g, "")}</p>
                <p>{author}</p>
                <p>{written_on.slice(0, written_on.indexOf('T'))}</p>
        </ul>
         </Box >
    )
}

const Box = styled.div`
 transition: box-shadow 0.5s;
  width: 85%;
  text-align: left;
  font-family: Arial;
  margin-bottom: 30px;
  border-radius: 10px;
  border: 1px solid gray;
  background: #f5ffe3;
  padding: 5px;
  border-width: 2px;
  border-color:rgba(22, 33, 33, 1);
  display: grid;
  &:hover {
     box-shadow: 5px 5px rgba(1, 138, 159, 0.5);
  }
@media (min-width: 748px) {

  .card {
    width: calc(50% - 2rem);
  }
}
}
`

export default WordCard