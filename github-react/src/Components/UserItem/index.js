import React from 'react';
// import { Link } from 'react-router-dom';
import './userItem.css'

const UserItem = ({ user }) => {
  return (
    // <Link to={`/user/${user.id}`}>
      <div className="box-user">
        <img src={user.avatar_url}/>
        <h3>Nome: {user.name}</h3>
        <p>Local: {user.location}</p>
      </div>
    // </Link>
  );
};

export default UserItem;