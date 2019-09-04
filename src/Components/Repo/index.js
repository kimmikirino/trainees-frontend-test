import React from 'react';
import { repos } from '../../mock';
 
import './repo.css'

const Repo = ({ user }) => {

  return user ? (
    <div>
      <span>Repos: </span>
      <div>
        {repos.map(repoItem => (`${repoItem.name} `))}
      </div>
    </div>
  ) : <span>Repos not found</span>
}

export default Repo;