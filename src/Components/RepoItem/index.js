import React from 'react';
import { Link } from 'react-router-dom';

import './repoItem.css';

const RepoItem = ({ repo }) => (
  <div className="repo-item-container">
      <Link to={`/repo/${repo.owner.login}/${repo.name}`}> 
        <p><b>Description: </b>{repo.name}</p>
        <p><b>Language: </b>{repo.language ? repo.language : ' - '}</p> 
      </Link>
  </div>
)

export default RepoItem;