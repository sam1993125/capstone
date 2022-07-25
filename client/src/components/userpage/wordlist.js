import React from 'react'
import WordCard from "./wordcard"

function WordList({ words, handleClick }) {

    const userwords = words.map((word) => (
        <WordCard 
            key={word.id}
            aword={word.word}
            // handleClick={handleClick}
        />
    ))

    return (
        <ul>
            {userwords}
            {/* <WordCard /> */}
        </ul>
    )
}

export default WordList 