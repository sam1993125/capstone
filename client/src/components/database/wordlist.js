import React from 'react'
import WordCard from "./WordCard"

function WordList({ userwords, handleClick }) {

    const words = userwords.map((word) => (
        <WordCard
            key={word.id}
        // handleClick={handleClick}
        />
    ))

    return (
        <ul className="cards">
            {words}
        </ul>
    )
}

export default WordList 