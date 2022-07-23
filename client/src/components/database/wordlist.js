import React from 'react'
import WordCard from "./WordCard"

function WordList({ words, handleClick }) {
    

    const userwords = words.map((word) => (
        <WordCard
            key={word.id}
            aword={word}
        // handleClick={handleClick}
        />
    ))

    return (
        <ul>
            {userwords}
        </ul>
    )
}

export default WordList 