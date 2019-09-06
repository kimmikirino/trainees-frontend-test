import React from 'react';
import './userRepos.css';

const UserRepos = ({ userR }) => {
    return userR ? (
            <div className="item-repos">                
                    <h2>{userR.name}</h2>
                    <p><b>Projeto: </b>{userR.full_name}</p>
                    <p><b>Linguagem usada: </b>{userR.language}</p>
                    <p><b>Descrição: </b>{userR.description}</p>      
                    <p><b>Criado em: </b>{userR.created_at}</p>
                    <p><b>Atualizado em: </b>{userR.updated_at}</p>                
            </div>
    ) : <div className="container">Nenhum repositorio encontrado</div>
}

export default UserRepos