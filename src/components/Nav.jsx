import React from 'react';
import MainMenu from './UI/MainMenu/MainMenu';
import Logo from "./UI/LogoTop/Logo";

const Nav = ({image}) => {
  return (
    <nav className='navigation'>
      <Logo logo={image} />
      <MainMenu/>
    </nav>
  )
}

export default Nav