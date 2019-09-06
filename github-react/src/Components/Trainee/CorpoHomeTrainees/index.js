import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { getUserByLogin } from "../../../API/Users/index.js";
import './corpoHomeTrainees.css';

const CorpoHomeTrainees = ({trainee}) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUserByLogin(trainee.nome).then(({ data }) => {
      setUser(data);
    });
  },[trainee, user]);

  return(
    <div id="trainee">
      <div id="trainee-img">
        <Link to={`${user.name}/${user.id}`} user={user}><img src={user.avatar_url} alt={user.name}/></Link>
      </div>
      <div id="name-trainees">
        <p>{user.name}</p>
      </div>
    </div>
  );
};
export default CorpoHomeTrainees;