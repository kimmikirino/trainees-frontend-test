import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { getUserByLogin } from "../../../API/Users/index.js";
import './corpoHomeMentores.css';

const CorpoHomeMentores = ({mentor}) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUserByLogin(mentor.nome).then(({ data }) => {
      setUser(data);
    });
  },[mentor, user]);

  return(
    <div id="mentor">
      <div id="mentor-img">
        <Link to={`${user.name}/${user.id}`} user={user}><img src={user.avatar_url} alt={user.name}/></Link>
      </div>
      <div id="name-mentores">
        <p>{user.name}</p>
      </div>
    </div>
  );
};
export default CorpoHomeMentores;