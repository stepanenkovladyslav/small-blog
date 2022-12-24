import React from 'react'
import logo from '../Mask-group.png'
import Nav from './Nav'
import {Outlet} from 'react-router-dom'
import Footer from "./Footer"

const Layout = () => {
  return (
    <div className='container'>
    <Nav image={logo}/> 
    <Outlet/>
    <hr className="break"></hr>
    <Footer />
    </div>
  )
}

export default Layout