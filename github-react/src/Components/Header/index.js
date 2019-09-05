import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/index.js';
import './header.css'

const Header = () => {

  return (
    <>
      <div className="fixed-menu-box">
        <div>
          <Link to={"/"}><Button>home</Button></Link>
          <Link to={"/sobre"}><Button>sobre</Button></Link>
        </div>
      </div>
    </>
  );
};

export default Header;