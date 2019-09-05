import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Header/Hero';
import RepoCommits from '../Components/RepoCommits';
import Title from '../Components/Title';
import { getUserRepoCommits } from '../API/User';

const RepoView = ({ match: { params }}) => {

  const [repo, setRepo] = useState(null);

  useEffect(() => {
    getUserRepoCommits(params.username, params.nameRepo).then(({ data }) => {
      setRepo(data);
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
          <Title title={`Commits: ${params.nameRepo} repository`} />
          {repo.map(repoItem => <RepoCommits repoItem={repoItem} key={repoItem.sha} />)}
        </div>
        <div><span>{repo.author}</span></div>   
      </section>
    </>
  )
}

export default RepoView;