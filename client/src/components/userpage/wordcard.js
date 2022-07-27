import React from 'react'
import { css } from '@emotion/react';

function WordCard({ id, aword, setCurrentUser, currentUser, handleDelete }) {
  //   const [like, setLike] = useState(true)
  const { name, definition, example, author, written_on } = aword


  return (

    <div style={{
      textAlign: 'left',
      fontFamily: 'Arial',
      backgroundColor: "#f5ffe3",
      fontSize: "20px",
      border: '1px solid gray',
      borderRadius: '5px',
      marginRight: "40px",
      marginBottom: "30px",
      border: "1px solid",
      padding: "5px",
      boxShadow: " 3px 3px"

    }}>
      <ul>
        <h4>{name}</h4>
        <button onClick={() => handleDelete(id)}>delete</button>
        <p>{definition}</p>
        <p>{example}</p>
        <p>{author}</p>
        <p>{written_on}</p>
      </ul>
    </div>
  )
}


export default WordCard