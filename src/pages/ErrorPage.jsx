import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './ErrorPage.module.css'

const ErrorPage = () => {
  return (
    <div className={style.container}>
        <h1 className={style.error}>404</h1>
        <p className={style.getBack}>Get back to <NavLink to="/">Home Page</NavLink></p>
    </div>
  )
}

export default ErrorPage