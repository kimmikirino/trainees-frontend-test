import React from 'react';

import './userItem.css';

const UserItem = ({ user }) => {
  return (
    <div>
      <span>Login github: {user.login}</span>
    </div>
  )
} 

export default UserItem;