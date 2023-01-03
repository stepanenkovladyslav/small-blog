import React from 'react'

  


const Pagelist = (props) => {
  const classes = (props, page) => {
    return props.page == page ? "active" : "";
  }

  function getPages (props) {
    return props.numberofpages.map(page => { return <li className="page" key={page}><button className={classes(props, page)}onClick={()=>props.changePage(page)}>{page}</button></li>})
}

  return (
    <ul className="pages">
      <button className="arrowBack" onClick={()=> props.changePage(props.page-1)}></button>
       {getPages(props)}
       <button className="arrowForward" onClick={()=> props.changePage(props.page+1)}></button>
    </ul>
  )
}

export default Pagelist