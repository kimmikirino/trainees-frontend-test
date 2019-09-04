import React from 'react';
import logo from '../../assets/imgs/github-logo.png';

import './header.css';

const Header = () => {
  return (
    <div className="fixed-menu">
      <div className="logo-content">
        <img src={logo} alt="Logo github" />
      </div>
    </div>
  )
}

export default Header;