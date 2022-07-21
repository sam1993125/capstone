import React, { useState } from 'react'

function WordCard({ word }) {
    //   const [like, setLike] = useState(true)
    const { name, definition, example, author, written_on } = word

    //   function handleToggleClick (){

    // }

    return (
        <li>
            <div>
                <h4>{name}</h4>
                <p>{definition}</p>
                <p>{example}</p>
                <p>{author}</p>
                <p>{written_on}</p>
            </div>
        </li>
    )
}

export default WordCard