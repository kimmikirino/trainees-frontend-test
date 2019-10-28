import React from 'react'
import { Link } from "react-router-dom";
import './header.css'

const Header = ({ back }) => {

  return(
    <div className="fixed-menu">
      <div>
        <Link to={`/`}><h3>Api GitHub</h3></Link>
      </div>
      <div>
       {(back !== undefined) ? 
        <div>
          <Link to={`/${back}`}>
            <button>Retornar para {back}</button>
          </Link>
        </div>
         : ''}
      </div>
    </div>
  )
}

export default Header