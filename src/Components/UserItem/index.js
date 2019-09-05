import React from 'react';
import Title from '../Title';

import './userItem.css';

const UserItem = ({ user }) => {
  return user && (
    <>
      <Title title="User info" /> 
      <div className="user-item">      
        <img src={user.avatar_url} alt="User avatar" />
        <div>
          <p><b>Username:</b> {user.login}</p>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Location:</b> {user.location}</p>
          <p><b>Email: </b> {user.email}</p>
          <p><b>Followers: </b> {user.followers}</p>
          <p><b>Following: </b> {user.following}</p>
          <p><b>Repos: </b> {user.public_repos}</p>
        </div>        
      </div>
    </>
  )
} 

export default UserItem;