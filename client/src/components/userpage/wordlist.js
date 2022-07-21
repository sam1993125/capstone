import React from 'react'
import WordCard from "./WordCard"

function WordList({ userwords, setCurrentUser, currentUser }) {

    const words = userwords.map((word) => (
        <WordCard setCurrentUser={setCurrentUser} currentUser={currentUser}
            key={word.id}
            // handleClick={handleClick}
        />
    ))

    return (
        <ul>
            {words}
            {/* <WordCard /> */}
            <h1>hi</h1>
        </ul>
    )
}

export default WordList 