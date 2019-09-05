import React, { useState } from 'react';
import InputField from '../../Components/InputField';
import { getUserByUsername } from '../../API/User';

const SearchUser = (user) => {  
  const [inputUsernameValue, setUsernameValue] = useState(null);

  // update username value
  const updateInputValue = event => {
    const value = event.target.value;
    setUsernameValue(value);
  }

  // call API passing username to search infos user
  const searchValue = () => {
    getUserByUsername(inputUsernameValue).then(({ data }) => {
      user.setUser(data);
    }).catch((error)=> {
      console.log(error);
    })
  }

  return (
    <InputField type="text" onChange={updateInputValue} placeholder="username" onClick={searchValue} />
  )
}

export default SearchUser;