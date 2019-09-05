import React from 'react';

import './repoCommits.css';

const RepoCommits = ({ repoItem }) => {  
  const commit = repoItem.commit;

  const date = new Date(commit.author.date);
  const formattedDate = new Intl.DateTimeFormat('en-US', {year: 'numeric', 
            month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', 
            second: '2-digit'}).format(date);

  return (
    <div className="repo-commits-item">
      <p><b>Author: </b>{commit.author.name} </p>
      <p><b>Email: </b>{commit.author.email} </p>
      <p><b>Message: </b>{commit.message} </p>
      <p><b>Date: </b>{formattedDate}</p>     
      </div>
  )
}

export default RepoCommits;