import React from 'react';
import Header from '../Components/Header/index.js';
import ChamaTrainees from '../Components/Trainee/ChamaTrainees/index.js'
import ChamaMentores from '../Components/Trainee/ChamaMentores/index.js'

const Main = () => {
  return (
    <>
      <header>
        <Header/>
      </header>
      <ChamaMentores />
      <ChamaTrainees />
    </>
  );
};
export default Main;