import React, { useState } from 'react'

function WordCard({ aword, setCurrentUser, currentUser }) {
    //   const [like, setLike] = useState(true)
    const { word, definition, example, author, written_on } = aword

    //   function handleToggleClick (){

    // }

    return (
        <li>
            <div>
                <h4>{word}</h4>
                <p>{definition}</p>
                <p>{example}</p>
                <p>{author}</p>
                <p>{written_on}</p>
            </div>
        </li>
    )
}

export default WordCard