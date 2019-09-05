import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Header/Hero';
import RepoCommits from '../Components/RepoCommits';
import Title from '../Components/Title';
import { getUserRepoCommits } from '../API/User';

const RepoView = ({ match: { params }}) => {

  const [repo, setRepo] = useState(null);
  const length = 10;

  // call API passing username and repo name to search commits related to this repo
  useEffect(() => {
    getUserRepoCommits(params.username, params.nameRepo).then(({ data }) => {
      data.length > length ?  (
        filterLastCommits(data)
      ) : setRepo(data)
    })
  }, [params]);

  // filter the last ten commits
  const filterLastCommits = (data) => {
    const commitsList = data.filter((item, index) => (index < length))
    setRepo(commitsList);
  }

  return repo && (
    <>
      <header>
        <Header />
        <Hero />
      </header>
      <section>
        <div>
          <Title title={`Last 10 commits: ${params.nameRepo}`} />
          {repo.map(repoItem => <RepoCommits repoItem={repoItem} key={repoItem.sha} />)}
        </div>
      </section>
    </>
  )
}

export default RepoView;