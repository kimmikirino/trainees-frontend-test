import React, { useState, useEffect } from 'react';
import Header from '../Components/Header/index.js';
import './aboutView.css';
import UserItem from '../Components/UserItem/index.js';
import { getUserByLogin, getCommits } from '../API/Users/index.js';

const AboutView = () => {
  const [user, setUser] = useState('');
  const [commits, setCommits] =useState([])
  useEffect(() => {
    getUserByLogin("hechprad").then(({ data }) => {
      setUser(data);
    })
    getCommits("hechprad", "trainees-frontend-test").then(({ data }) => {
      setCommits(data);
    })
  },[]);

  return (
    <>
      <header>
        <Header/>
      </header>
      <div className="about-container">
        <UserItem user={user} key={user.id} />
      </div>
      <div className="commits-project-box">
        <h3><b>Histórico de commits deste projeto:</b></h3>
        {
          commits.map((commit, count) => {
            return (
              <a href={commit.html_url} key={commit.sha}>
                <p key={commit.sha}>{commits.length - count}: {commit.commit.message}</p>
              </a>
            )
          })
        }
      </div>
    </>
  );
};

export default AboutView;