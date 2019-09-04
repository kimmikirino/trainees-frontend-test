import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Header/Hero';
import UserItem from '../Components/UserItem';
import Repo from '../Components/Repo';
import { getUser } from '../API/User';
// import { user } from '../mock';

import './main.css';

const Main = () => {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser().then(({ data }) => {
      setUser(data);
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <>
      <header>
        <Header />
        <Hero />
      </header>
      <section className="body-container">
        <div>
          <UserItem user={user} />
          <Repo user={user} />
        </div>
      </section>
    </>
  )
}

export default Main;