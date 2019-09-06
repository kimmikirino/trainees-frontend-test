import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { getUsersByName } from '../../API/GitHub'
import './userDetail.css';

const UserDetail = ({ users }) => {
  const [user, setUsersByName] = useState()
  useEffect(() => {
    user && (
      getUsersByName().then(( data ) => { 
          setUsersByName(data.name) })
    ) 
  }, [users]); 

  return users ? (
    <div className="users-details">
      <div className="ajustaFoto">
        <br/><br/><br/>
          <p><b>Foto:<br/> </b><img src={users.avatar_url} /></p>
          <h2>{users.name}</h2>
          <h3><b>Name: </b>{users.name}</h3>
          <h4><b>Description: </b>{users.description}</h4>
          <h4><b>Location: </b>{users.location}</h4>
          <h4><b>Followers: </b>{users.followers}</h4>
    </div>
    </div>

  ) : <div>Users not found</div>
}

export default withRouter(UserDetail);