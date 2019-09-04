import React from 'react'
import { withRouter } from 'react-router-dom'
import './userDetail.css'

const UserDetail = ({ user }) => {

    return user ? (
        <div>
            <img src={user.avatar_url} alt={user.name}></img>
            <div>
                 
                <h3>{user.name}</h3>                             
                <p><b>Compania: </b>{user.company}</p>
                <p><b>Localização: </b>{user.location}</p>
                <p><b>Bio: </b>{user.bio}</p>
                <p><b>Compania: </b>{user.company}</p>
                <p><b>Conta Criada: </b>{user.created_at}</p>
                <p><b>Seguidores: </b>{user.followers}</p>
                <p><b>Seguindo: </b>{user.following}</p>
                <p><b>Email: </b>{(user.email === null ? ' ' : user.email)}</p>
                <div>
                    <button>teste</button>
                </div>
            </div>
        </div>
    ) : <div>Usuario não encontrado</div>
}

export default withRouter(UserDetail)