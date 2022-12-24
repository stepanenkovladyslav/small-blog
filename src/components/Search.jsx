import React from 'react'

const Search = (props) => {
  return (
    <input className="searchsort search" type="text" placeholder='Search'  value={props.searchText} onChange={(e)=> props.changeSearch(e.target.value)}></input>
  )
}

export default Search
