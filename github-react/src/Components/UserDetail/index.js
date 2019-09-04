import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { getRepositoriesByUrl } from '../../API/Users/index.js';
import './userDetail.css'

// const UserDetail = ({ user,  history }) => {
const UserDetail = ({ user,  history }) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {

    getRepositoriesByUrl(user.repos_url).then(({ data }) => {
      setRepositories(data);
    });

  },[user]);

  return user ? (
    <div className="container">
      <img className="user-img" src={user.avatar_url} alt={user.name} />
        <h2 className="user-name">{user.name}</h2>
        <p>Local: {user.location}</p>
        <a href={user.html_url}>Perfil no Github</a>
        <div className="rep-container">
        {
          repositories.map(repository =>
            <a href={repository.html_url} key={repository.id}>
              <p key={repository.id}>{repository.name}</p>
            </a>
          )
        }
        </div>


        {/* <div className="btn-box">
          <Button className="btn btn-primary" onClick={handleEdit}>Editar</Button>
          <Button className="btn btn-secondary" onClick={deleteFilm}>Excluir</Button>
        </div> */}
    </div>
  ) : <div><p>Usuário Não Encontrado</p></div>
}

export default withRouter(UserDetail)