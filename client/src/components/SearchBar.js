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
            {/* <Title htmlFor="search">Search Slangs:</Title> */}
            <Input
                type="text"
                id="search"
                placeholder="Search slangs..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                autoComplete="on"
            />
        </Search>
    )
}

const Search= styled.div`
font-family: 'Mouse Memoirs', sans-serif;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  margin:80px;
  @media screen and (max-width: 748px){
       margin:30px;
  }
`

const Title = styled.h2`
  font-family: 'Mouse Memoirs', sans-serif;
`


const Input = styled.input`
    border-radius: 7px;
    padding: 0.7rem;
  border: none;
  font-family: inherit;
  font-size: 1.2em;
  border-bottom: 1.5px gray;
  transition: all 0.2s;
  margin: 10px
  width: 100%;
    &:focus {
    outline: none;
    border-bottom: 4px solid gray;
}
`

export default SearchBar

