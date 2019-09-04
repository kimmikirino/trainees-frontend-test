import React from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Header/Hero';
import UserItem from '../Components/UserItem';
import { user } from '../mock';

import './main.css';

const Main = () => {
  return (
    <>
      <header>
        <Header />
        <Hero />
      </header>
      <section>
        <UserItem user={user} />
      </section>
    </>
  )
}

export default Main;