import React from 'react';

import './repoCommits.css';

const RepoCommits = ({ repoItem }) => {  
  const commit = repoItem.commit;
  
  return (
    <div className="repo-commits-item">
      <p><b>Author: </b>{commit.author.name} </p>
      <p><b>Email: </b>{commit.author.email} </p>
      <p><b>Message: </b>{commit.message} </p>
      <p><b>Date: </b>{commit.author.date} </p>      
      </div>
  )
}

export default RepoCommits;