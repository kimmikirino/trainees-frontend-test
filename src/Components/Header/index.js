import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/imgs/home.png'
import './header.css'

const Header = () => {
  return(
    <div className="fixed-menu">
      <div className="logo">
        <Link to="/"><img src={logo} alt="home" /></Link>
      </div>
    </div>
  )
}

export default Header