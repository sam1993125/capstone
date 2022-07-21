import React from 'react'

function SearchBar({ searchTerm, onSearchChange }) {

    function handleSubmit(e) {
        e.preventDefault();
        onSearchChange(searchTerm)
    }

  return (
   
        <div className="searchbar" onSubmit={handleSubmit}>
            {/* <label htmlFor="search">Search </label> */}
            <input
                type="text"
                id="search"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                autoComplete="on"
            />
        </div>
    )
}

export default SearchBar