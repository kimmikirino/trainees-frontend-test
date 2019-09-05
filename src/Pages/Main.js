import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Header/Hero';
import UserInfo from '../Components/UserInfo'

const Main = () => {
  return (
    <>
      <header>
        <Header />
        <Hero />
      </header>
        <UserInfo />
    </>
  )
}

export default Main