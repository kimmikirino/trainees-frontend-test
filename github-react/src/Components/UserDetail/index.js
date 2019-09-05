import React from 'react';
import { withRouter } from 'react-router-dom';
import Repositories from '../UserDetail/Repositories/index.js';
import Button from '../Button/index.js';
import './userDetail.css';

const UserDetail = ({ user,  history }) => {
  
  const handleClick = () => {
    history.push('/')
  }

  return user ? (
    <div className="detail-container">
      <img className="user-img" src={user.avatar_url} alt={user.name} />
        <h1 className="user-name">{user.name}</h1>
        <p>E-mail: {user.email}</p>
        <p>Local: {user.location}</p>
        <p>Empresa: {user.company}</p>
        <p>Biografia: {user.bio}</p>
        <a href={user.html_url}>Perfil no Github</a>
        <Repositories user={user} />
        <Button type="text" onClick={handleClick}>VOLTAR</Button>
    </div>
  ) : <div><p>Usuário Não Encontrado</p></div>
}

export default withRouter(UserDetail)