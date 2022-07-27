import React, { useState } from 'react'
import {useHistory } from 'react-router-dom'

function WordCard({id, aword, setCurrentUser, currentUser }) {
    const { word, definition, example, author, written_on } = aword

    const [singleword, setSingleword] = useState()
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory()


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
          r.json()
            .then(data => setSingleword(data))   
            // (pessimistic rendering)
            // setSingleword(aword)
            // (optimistic rendering)
        //   console.log(r.json());
          history.push("/");
        } else {
          r.json()
            .then((err) => setErrors(err.errors));
        }
      })
  }

    return (
        <ul>
            <div style={{
                textAlign: 'left',
                fontFamily: 'Arial',
                backgroundColor: "#f5ffe3",
                fontSize: "24px",
                border: '1px solid gray',
                borderRadius: '5px',
                marginRight: "30px",
                marginBottom: "30px",
                // border: "1px solid",
                padding: "5px",
                boxShadow: "3px 3px"

            }}>
                <h4>{word}</h4>
                <button onClick={handleClick}>➕</button>
                <p>{definition}</p>
                <p>{example}</p>
                <p>{author}</p>
                <p>{written_on}</p>
            </div>
        </ul>
    )
}


export default WordCard