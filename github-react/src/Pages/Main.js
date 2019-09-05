import React from 'react';
import './main.css';
import Header from '../Components/Header/index.js';
import UserBody from '../Components/UserBody/index.js';

const Main = () => {

  return (
    <>
    <header>
      <Header/>
    </header>
    <UserBody />
    </>
  );
};

export default Main;