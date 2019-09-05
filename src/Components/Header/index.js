import React from 'react'
import { Link } from "react-router-dom";
import './header.css'

const Header = ({ login }) => {

  return(
    <div className="fixed-menu">
      <div>
        <Link to={`/`}><h3>Api GitHub</h3></Link>
      </div>
       {(login !== undefined) ? <Link to={`/${login}`}><button>Retornar para {login}</button></Link> : ''}
    </div>
  )
}

export default Header