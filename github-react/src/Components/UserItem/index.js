import React from 'react';
import { Link } from 'react-router-dom';
import './userItem.css'

const UserItem = ({ user }) => {
  return (
      <div className="box-user">
        <Link to={`${user.login}/${user.id}`} user={user}><img src={user.avatar_url} alt={user.name}/></Link>
        <h3>Nome: {user.name}</h3>
      </div>
  );
};

export default UserItem;