import React from 'react'
import { Link } from 'react-router-dom'

import Field from "../Fields/Box";

import "./userReposView.css"

const UserView = ({ repos }) => (
        <div className="list-repos">
            <div className="list-title">
                <h3>Repositórios | {repos.length}</h3>
            </div>
            <div className="list-items">
                {
                    repos.map(repo => (
                        <div className="list-item" key={repo.id}>
                            <Link to={"/users/" + repo.owner.login + "/" + repo.name + '/commits'}>{repo.name}</Link>
                            <ul>
                                <li><Field label="Descrição:" info={repo.description} /></li>
                                <li><Field label="Linguagem:" info={repo.language} /></li>
                            </ul>
                        </div>
                    )
                )}
            </div>
        </div>
);

export default UserView