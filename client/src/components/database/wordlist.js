import React from 'react'
import WordCard from "./wordcard"

function WordList({ words, currentUser }) {

    const userwords = words.map((word) => (
        <WordCard
            id={word.defid}
            aword={word}
            currentUser={currentUser}
        />
    ))
 
    return (
        <div>
            {userwords}
        </div>
    )
}

export default WordList  