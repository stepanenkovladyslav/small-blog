import React from 'react'

const Sort = ({sort, changeActiveSort}) => {
  return (
    <button className="searchsort sort" type="button" onClick={()=>changeActiveSort()}>Sort</button>
  )
}

export default Sort