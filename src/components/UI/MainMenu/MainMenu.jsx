import React from 'react'
import style from './MainMenu.module.css'
import {NavLink} from 'react-router-dom'

const MainMenu = () => {
  return (
    <ul className={style.menu}>
      <li className={style.menuItem}><NavLink to='/' >Blogposts</NavLink></li>
      <li className={style.menuItem}><NavLink to='/info' >Information</NavLink></li>
      <li className={style.menuItem}><NavLink to='/reviews' >Reviews</NavLink></li>
    </ul>
  )
}

export default MainMenu
