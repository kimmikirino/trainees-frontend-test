import React from 'react'
import { Link } from 'react-router-dom'

import "./userReposView.css"

const UserView = ({ repos }) => (
        <div className="list-repos">
            <div className="list-title">
                <h3>Repositorios</h3>
            </div>
            <div className="list-items">
                {repos.map(repo => {
                    let link = "/users/" + repo.owner.login + "/" + repo.name + '/commits';
                    return (
                        <div className="list-item" key={repo.id}>
                        <Link to={link} > {repo.name} </Link>
                    </div>
                    )}

                )}
            </div>
        </div>
);


export default UserView