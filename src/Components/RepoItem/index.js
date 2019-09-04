import React from 'react';

import './repoItem.css';

const RepoItem = ({ repo }) => {
  return (
    <div className="repo-item-container">
        <p><b>Description: </b>{repo.name}</p>
        <p><b>Language: </b>{repo.language}</p>      
    </div>
  )
}

export default RepoItem;