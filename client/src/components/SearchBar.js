import React,{useEffect} from 'react'

function SearchBar({ searchTerm, onSearchChange }) {

    function handleSubmit(e) {
        e.preventDefault();
        onSearchChange(searchTerm)
    }

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            console.log(searchTerm)
            onSearchChange(searchTerm)
            onSearchChange("")
            // Send Axios request here
        }, 1500)

        return () => clearTimeout(delayDebounceFn)
    }, [searchTerm])


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