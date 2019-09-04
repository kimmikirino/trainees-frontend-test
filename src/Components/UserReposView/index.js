import React from 'react'
import "./userReposView.css"

const UserView = ({ repos }) => (
        <div className="list-repos">
            <div className="list-title">
                <h3>Repositorios</h3>
            </div>
            <div className="list-items">
                {repos.map(repo => (
                    <div className="list-item" key={repo.id}>
                        {repo.name}
                    </div>
                ))}
            </div>
        </div>
);


export default UserView