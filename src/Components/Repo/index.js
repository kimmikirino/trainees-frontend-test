import React, { useState, useEffect} from 'react';
import RepoItem from '../RepoItem';
import Title from '../Title';
// import { repos } from '../../mock';
import { getUserReposByURL } from '../../API/User';
 
import './repo.css'

const Repo = ({ user }) => {
  const [repos, setRepo] = useState([]);

  // call API passing repository URL
  useEffect(() => {
    user && (
      getUserReposByURL(user.repos_url).then((data) => {
        setRepo(data);
      })
    )
  }, [user]);

  // list repositories
  return user && (
    <>
      <Title title="Repositories" />
      <div className="repo-container">
        {repos.map(repoItem => <RepoItem repo={repoItem} key={repoItem.id} />)}
      </div>
    </>
  )
}

export default Repo;