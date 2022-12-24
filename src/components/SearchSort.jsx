import React from 'react'
import Search from './Search'
import Sort from './Sort'

const SearchSort = ({sort, search, blogposts, change, searchText, changeSearch, changeActiveSort}) => {
  return (
    <div className='searchsort-container'>
        <Search blogposts={blogposts} search={search} change={change} searchText={searchText} changeSearch={changeSearch} />
        <Sort sort={sort} changeActiveSort={changeActiveSort}/>
    </div>
  )
}

export default SearchSort