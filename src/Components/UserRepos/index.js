import React from 'react';
import './userRepos.css';

const UserRepos = ({ userR }) => {
    return userR ? (
        <div>
            <div>
                <div>
                    <h3>{userR.name}</h3>
                    <p><b>Projeto: </b>{userR.full_name}</p>
                    <p><b>Url para clone por HTTPS: </b>{userR.git_url}</p>
                    <p><b>Url para clone por SSH: </b>{userR.ssh_url}</p>
                    <p><b>Linguagem usada: </b>{userR.language}</p>
                    <p><b>Descrição: </b>{userR.description}</p>                
                    <p><b>Tamanho do projeto: </b>{userR.size}</p>
                    <p><b>Criado em: </b>{userR.created_at}</p>
                    <p><b>Atualizado em: </b>{userR.updated_at}</p>
                </div>
            </div>
        </div>
    ) : <div>Nenhum repositorio encontrado</div>
}

export default UserRepos