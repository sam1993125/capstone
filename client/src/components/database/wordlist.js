import React from 'react'
import WordCard from "./wordcard"
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import styled from '@emotion/styled'

function WordList({ words, currentUser }) {

    const userwords = words.map((word) => (
        <WordCard
            id={word.defid}
            aword={word}
            currentUser={currentUser}
        />
    ))
 
    return (
        <section>
            <List>
                {userwords}
            </List>
        </section>
    )
}
const List = styled.ul`
  

width: auto;
display: grid;
grid-template-columns: repeat(2, 2fr);
grid-auto-rows: minmax(100px, auto);
gap: 1rem;

`

export default WordList  