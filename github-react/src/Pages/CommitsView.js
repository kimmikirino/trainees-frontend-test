import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import Header from '../Components/Header/index.js';
import Button from '../Components/Button/index.js';
import { getCommits } from '../API/Users/index.js';

//recupera os dados da uri
const CommitsView = ({ match, history } ) => {
  const user = match.params.usuario;
  const userId = match.params.id;
  const rep = match.params.repositorio;
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    getCommits(user, rep).then(({data}) => {
      setCommits(data);
    })
  }, [user, rep]);

  console.log({history})

  const handleClick = () => {
    history.push(`/${user}/${userId}`)
  }

  return (
    <div>
      <header>
        <Header/>
      </header>
      <div>
        {
          commits.map((commit, count) => 
            count < 10 ?
              <p key={commit.sha}>{commit.commit.message}</p>
            : ''
          )
        }
      </div>
      <Button type="button" onClick={handleClick}>VOLTAR</Button>
    </div>
    
  );
};

export default withRouter(CommitsView);