import React from 'react'

  
function getPages (props) {
    return props.numberofpages.map(page => { return <li className="page" key={page}><button onClick={()=>props.changePage(page)}>{page}</button></li>})
}

const Pagelist = (props) => {
  return (
    <ul className="pages">
       {getPages(props)}
    </ul>
  )
}

export default Pagelist