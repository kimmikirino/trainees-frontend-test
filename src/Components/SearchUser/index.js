import React, { useState } from 'react';
import { getUserByUsername } from '../../API/User';
import searchIcon from '../../assets/imgs/search-icon.png';

import '../UserItem/userItem.css';

const SearchUser = (user) => {  
  const [inputUsernameValue, setUsernameValue] = useState(null);

  // update username value
  const updateInputValue = event => {
    const value = event.target.value;
    setUsernameValue(value);
  }

  // call API passing username to search infos user
  const searchUser = () => {
    getUserByUsername(inputUsernameValue).then(({ data }) => {
      user.setUser(data);
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