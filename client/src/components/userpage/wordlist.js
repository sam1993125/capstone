import React from 'react'
import WordCard from "./wordcard"
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import styled from '@emotion/styled'


function WordList({ words, handleDelete }) {

    // console.log(words)

    const userwords = words.map((word) => (
        <WordCard
            id={word.id}
            aword={word}
            handleDelete={handleDelete}
        />
    ))

    return (
        <div>
            <h2 className="title">MY SLANGS</h2>
                <List>
                  {userwords}
            </List>
        </div>
    
    )
}

const List = styled.ul`
  

width: auto;
display: grid;
grid-template-columns: repeat(2, 2fr);
grid-auto-rows: minmax(100px, auto);
gap: 1rem;
  @media (min-width: 1440px) {
      display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 2fr));
    grid-gap: 1rem;
}

`


export default WordList 