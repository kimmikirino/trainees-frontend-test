import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../Components/Header/index.js';
import Button from '../Components/Button/index.js';
import LabelInput from '../Components/LabelInput/index.js';
import './commitsView.css';
import { getCommits } from '../API/Users/index.js';

//recupera os dados da uri
const CommitsView = ({ match, history } ) => {
  const user = match.params.usuario;
  const userId = match.params.id;
  const rep = match.params.repositorio;
  const [commits, setCommits] = useState([]);
  const [field, setField] = useState({search: ''});
  const [search, setSearch] = useState({});

  useEffect(() => {
    getCommits(user, rep).then(({data}) => {
      setCommits(data);
    })
  }, [user, rep]);

  const handleClick = () => {
    history.push(`/${user}/${userId}`)
  }

  const handleChangeSearch = event => {
    const value = event.target.value;
    setField({[event.target.name]: value});
    let commitsClone = commits;
    
    let searchResult = commitsClone.filter(commit => {
      if(commit.commit.message.toUpperCase().includes(value.toUpperCase())) return commit 
      else return "";
    }) 
    setSearch(searchResult);
  };
  
  return (
    <div>
      <header>
        <Header/>
      </header>
      <div className="commit-box">
      <LabelInput type="text" label="Pesquisar: " name="search" value={field.search} onChange={handleChangeSearch}/>
        {
          field.search === "" ?
          commits.map((commit, count) => 
            count < 10 ?
              <a href={commit.html_url}><p key={commit.sha}>{commit.commit.message}</p></a>:''
          ) : search.map(commit => 
            <a href={commit.html_url}><p key={commit.sha}>{commit.commit.message}</p></a>
          )
        }
      </div>
      <Button type="button" onClick={handleClick}>VOLTAR</Button>
    </div>
    
  );
};

export default withRouter(CommitsView);