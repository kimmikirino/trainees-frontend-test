import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getRepositoriesByUrl } from '../../../API/Users/index.js';
import Button from '../../Button/index.js';
import './repositories.css';

const Repositories = ({ user }) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    getRepositoriesByUrl(user.repos_url).then(({ data }) => {
      setRepositories(data);
    });
  },[user]);

  return (
    <div className="rep-container">
          <h3>Lista de Repositórios</h3>
          {
            repositories.map(repository => {
              return (
                <div key={repository.id+1} className="div-p-rep-box">
                  <a href={repository.html_url} key={repository.id}>
                    <p key={repository.id}>{repository.name}</p>
                  </a>
                  <Link to={`/${user.login}/${user.id}/${repository.name}/commits` }>
                    <Button className="rep-button" type="text" key={repository.id+2}>Commits</Button>
                  </Link>
                </div>
              );
            })
          }
    </div>
  )
}

export default Repositories;