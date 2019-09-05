import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/index.js';
import './aboutView.css';
import UserItem from '../Components/UserItem/index.js';
import { getUserByLogin } from '../API/Users/index.js';

const AboutView = () => {
  const [user, setUser] = useState('hechprad');
  
  useEffect(() => {
    getUserByLogin(user).then(({ data }) => {
      setUser(data);
    })
  }, [user]);

  return (
    <>
      <header>
        <Header/>
      </header>
      <h1>{user.name}</h1>
      <div className="about-container">
        <UserItem user={user} key={user.id} />
      </div>
    </>
  );
};

export default AboutView;