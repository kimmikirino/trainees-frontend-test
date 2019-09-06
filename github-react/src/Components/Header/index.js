import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button/index.js';
import './header.css'
import Logo from '../../assets/imgs/github.png'

const Header = () => {

  return (
    <>
      <div className="fixed-menu-box">
        <div className="logo-box">
          <Link to={"/"}>
            <img className="github-icon"src={Logo} alt="Github Logo" />
            <p className="menu-title">Trainees Front-end</p>
          </Link>
        </div>
        <div className="box-fixed-menu-btn">
          <Link to={"/"}><Button>home</Button></Link>
          <Link to={"/equipe"}><Button>equipe</Button></Link>
          <Link to={"/sobre"}><Button>sobre</Button></Link>
        </div>
      </div>
    </>
  );
};

export default Header;