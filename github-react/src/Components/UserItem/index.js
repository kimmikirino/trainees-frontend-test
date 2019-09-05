import React from 'react';
import { Link } from 'react-router-dom';
import './userItem.css'

const UserItem = ({ user }) => {
  return (
      <div className="box-user">
        <Link to={`${user.login}/${user.id}`} user={user}><img src={user.avatar_url} alt={user.name}/></Link>
        <div className="user-item-data">
          <h3>{user.name}</h3>
          <p>Local: {user.location}</p>
          <p>Biografia: {user.bio}</p>
          <p>Repositórios Públicos: {user.public_repos}</p>
          <p>E-mail: hecherat@gmail.com{user.email}</p>
          <a href={user.html_url}><p>Perfil no Github</p></a>
        </div>
      </div>
  );
};

export default UserItem;