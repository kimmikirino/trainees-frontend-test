import React from 'react' 
import Header from '../../Components/Header'
import UserDetail from '../../Components/UserDetail'
import Repo from '../../Pages/Repo'
import './user.css'
 
const Users = () => {
    
 return(
        <div className="detail">
          <Header />
          <UserDetail />
          <Repo />
        </div>
      )
    }
export default Users