import React from 'react';

import './repoCommits.css';

const RepoCommits = ({ repo }) => {
    
    return(
        <div className="repos-commits">                
            <h2>{repo.commit.message}</h2>
            <p><b>Autor: </b>{repo.commit.author.name}</p> 
            <p><a href={repo.html_url}>Acessar</a></p>                 
        </div>
    )
}

export default RepoCommits;
