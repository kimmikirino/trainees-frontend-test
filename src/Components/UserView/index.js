import React from 'react'
import Field from "../Fields/Box"
import "./userView.css"

const UserView = ({ user }) => {

    return (
        <>
            <div className="user-info">
                <div className="user-image">
                    <img src={user.avatar_url} alt={user.name} />
                </div>
                <div className="user-details">
                    <h3>Informações do usuário</h3>
                    <Field label="Usuário:" info={user.login} />
                    <Field label="Empresa:" info={user.company} />
                    <Field label="Localização:" info={user.location} />
                    <Field label="Email" info={user.email} />
                    <Field label="Sobre:" info={user.bio} />
                    <Field label="Seguindo:" info={user.following} />
                    <Field label="Seguidores:" info={user.followers} />
                </div>
            </div>
        </>
    )
};

export default UserView