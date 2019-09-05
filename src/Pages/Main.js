import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Header/Hero';
import UserItem from '../Components/UserItem';
import Repo from '../Components/Repo';
import { getUser } from '../API/User';
import { getUserByUsername } from '../API/User';
// import { user } from '../mock';
import searchIcon from '../assets/imgs/search-icon.png';

import './main.css';

const Main = () => {
  
  const [user, setUser] = useState(null);
  const [inputUsernameValue, setUsernameValue] = useState(null);

  useEffect(() => {
    getUser().then(({ data }) => {
      setUser(data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  const updateInputValue = event => {
    const value = event.target.value;
    setUsernameValue(value);
  }

  const searchUser = () => {
    getUserByUsername(inputUsernameValue).then(({ data } ) => {
      setUser(data);
    }).catch((error)=> {
      console.log(error);
    })
  }

  return (
    <>
      <header>
        <Header />
        <Hero />
      </header>
      <section className="body-container">
        <div>
          {/*I would like to add a new component called Input.. but how? */}
          <div className="search-user">
            <input type="text" onChange={updateInputValue} placeholder="username"></input>    
            <button onClick={searchUser}>
              <img src={searchIcon} alt="search icon" />
            </button>    
          </div>
          <UserItem user={user} />      
          <Repo user={user} />
        </div>
      </section>
    </>
  )
}

export default Main;