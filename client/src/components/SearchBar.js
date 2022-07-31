import React from 'react'
/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import styled from '@emotion/styled'

function SearchBar({ searchTerm, onSearchChange }) {

    function handleSubmit(e) {
        e.preventDefault();
        onSearchChange(searchTerm)
    }

    // useEffect(() => {
    //     const delayDebounceFn = setTimeout(() => {
    //         console.log(searchTerm)
    //         onSearchChange(searchTerm)
    //         onSearchChange("")
    //     }, 1500)
    //     return () => clearTimeout(delayDebounceFn)
    // }, [searchTerm])


    return (
        <Search onSubmit={handleSubmit}>
            <h2 htmlFor="search">Search Slangs:</h2>
            <Input
                type="text"
                id="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                autoComplete="on"
            />
        </Search>
    )
}

const Search= styled.div`
  font-family: arial;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  margin:10px;
`


const Input = styled.input`
 padding: 0.7rem;
  border: none;
  font-family: inherit;
  font-size: 1.2em;
  border-bottom: 2px solid gray;
  transition: all 0.2s;
  margin: 10px
  width: 100%;
    &:focus {
    outline: none;
    border-bottom: 4px solid var(--black);
}
`

export default SearchBar

