import React, { useState } from 'react';
import { getUserByUsername } from '../../API/User';
import searchIcon from '../../assets/imgs/search-icon.png';

import '../UserItem/userItem.css';

const SearchUser = (props) => {

  const [inputUsernameValue, setUsernameValue] = useState(null);

  const updateInputValue = event => {
    const value = event.target.value;
    setUsernameValue(value);
  }

  const searchUser = () => {
    getUserByUsername(inputUsernameValue).then(({ data } ) => {
      props.setUser(data);
    }).catch((error)=> {
      console.log(error);
    })
  }

  return (
    <div className="search-user">
      <input type="text" onChange={updateInputValue} placeholder="username"></input>    
      <button onClick={searchUser}>
        <img src={searchIcon} alt="search icon" />
      </button>    
    </div>
  )
}

export default SearchUser;