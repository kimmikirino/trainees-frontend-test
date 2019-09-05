import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Header/Hero';
import RepoCommits from '../Components/RepoCommits';
import Title from '../Components/Title';
import InputField from '../Components/InputField';
import { getUserRepoCommits } from '../API/User';

const RepoView = ({ match: { params }}) => {
  const [repo, setRepo] = useState(null);
  const [repoFiltered, setRepoFiltered] = useState(null);
  const [commitInputFilter, setCommitInputFilter] = useState(null);
  const length = 10;

  // call API passing username and repo name to search commits related to this repo
  useEffect(() => {
    getUserRepoCommits(params.username, params.nameRepo).then(({ data }) => {
      data.length > length ?  (
        filterLastCommits(data)
      ) : setRepo(data)

      setRepoFiltered(data);
    })
  }, [params]);

  // filter the last ten commits
  const filterLastCommits = (data) => {
    const lastCommits = data.filter((item, index) => (index < length));
    setRepo(lastCommits);
  }

  // update commit value
  const updateCommitValue = (event) => {
    const value = event.target.value;
    setCommitInputFilter(value);
  }

  // filter commits >>in repo<< by commit input value
  const searchCommit = () => {
    const commitSearch = repo.filter((item) => (item.commit.message.includes(commitInputFilter)));
    setRepoFiltered(commitSearch);
  }

  return repoFiltered && (
    <>
      <header>
        <Header />
        <Hero />
      </header>
      <section>
        <InputField type="text" onChange={updateCommitValue} placeholder="search commit" onClick={searchCommit} />
        <Title title={`Last 10 commits: ${params.nameRepo}`} />
        {repoFiltered.map(repoItem => <RepoCommits repoItem={repoItem} key={repoItem.sha} />)}
      </section>
    </>
  )
}

export default RepoView;