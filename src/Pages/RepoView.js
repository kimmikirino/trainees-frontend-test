import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Header/Hero';
import { getUserRepoCommits } from '../API/User';

const RepoView = ({ match: { params }}) => {

  const [repo, setRepo] = useState(null);

  useEffect(() => {
    getUserRepoCommits(params.username, params.nameRepo).then(({ data }) => {
      setRepo(data);
      console.log(data);
    })
  }, [params]);

  return repo && (
    <>
      <header>
        <Header />
        <Hero />
      </header>
      <section>
        <div>
          {repo.map(repoItem => <p key={repoItem.sha}>{repoItem.sha}</p>)}
        </div>
        <div><span>{repo.author}</span></div>   
      </section>
    </>
  )
}

export default RepoView;