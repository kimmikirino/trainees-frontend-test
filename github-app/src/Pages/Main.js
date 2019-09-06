import React, { useState, useEffect } from 'react'
import Header from "../Components/Header"
import { getUsersByName, getMyRepo } from '../API/GitHub'
import UserDetail from '../Components/UserDetail';
import Repo from '../Pages/Repo'
import './main.css'

const Main = () => {
  const [users, setUser] = useState("StefanieLibarino");
  const [userInfo, setUserInfo] = useState(null);   
  const [repoInfo, setRepoInfo] = useState(null);   
    useEffect(() => {
      getUsersByName(users).then(response => {
      setUserInfo(response.data)      
      }).catch((error) => {
      console.log(error)
      })
      getMyRepo(repoInfo).then(response => {  
        setRepoInfo(response.data)
      console.log(response.data)
      }).catch((error) => {
      console.log(error)
      })
},  []);

    return (
  <>
    <header>
      <Header />
      <UserDetail users={userInfo} />
      {console.log(repoInfo)}
      <Repo repo={repoInfo} />  
    </header>
  </>
)}
;

export default Main;