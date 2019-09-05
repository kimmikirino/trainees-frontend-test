import React from 'react';
import searchIcon from '../../assets/imgs/search-icon.png';

import './inputField.css'

const InputField = ({ onClick, ...props}) => {
  return (
    <div className="search-user">
      <input {...props}></input>    
      <button onClick={onClick}>
        <img src={searchIcon} alt="search icon" />
      </button>    
    </div>
  )
}

export default InputField;