import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/github-logo.png';

import './header.css';

const Header = () => {
  return (
    <div className="fixed-menu">
      <div className="logo-content">
        <Link to="/">
          <img src={logo} alt="Logo github" />
        </Link>
      </div>
    </div>
  )
}

export default Header;