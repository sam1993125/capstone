import React from 'react'
import WordCard from "./wordcard"

function WordList({ id, words, handleDelete }) {

    // console.log(words)

    const userwords = words.map((word) => (
        <WordCard
            id={word.id}
            aword={word}
            handleDelete={handleDelete}
        />
    ))

    return (
        <ul>
            {userwords}
        </ul>
    )
}

export default WordList 