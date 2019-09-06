import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import './repo.css'
const Repo = ({repo}) => {
  
  return repo ? (
    <div className="repo-info">
      <div className="ajustaFoto2">
        {
          repo.map(item => (
            <div key={item.id}>
              <h4><b>Repositories: </b>{item.name}</h4>
              <h4><b>full_name: </b>{item.full_name}</h4>
            </div>
          ) )
        }
      </div>

      </div>
  ) : <div>Users not found</div>
};

export default withRouter(Repo);