import React, { useState, useEffect } from 'react'
import Header from '../Components/Header/index.js';
import UserDetail from '../Components/UserDetail/index.js';
import { getUserById } from '../API/Users/index.js';

const UserView = ({ match }) => {
  const [user, setUser] = useState('');

  // recupera os dados do user com o id
  useEffect(() => {
    getUserById(match.params.id).then(({ data }) => {
      setUser(data);
    })
  }, [match.params.id]);

  return (
    <div className="user-view-box">
      <header>
        <Header/>
      </header>
      <UserDetail user={user} />
    </div>
  );
};

export default UserView;