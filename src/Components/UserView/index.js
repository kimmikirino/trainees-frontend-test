import React from 'react'
import Field from "../Field"
import "./userView.css"

const UserView = ({ user }) => {

    return (
        <>
            <div className="user-info">
                <div className="user-image">
                    <img src={user.avatar_url} alt={user.name} />
                </div>
                <div className="user-details">
                    <h3>Informacoes do usuario</h3>
                    <Field label="Usuario:" info={user.login} />
                    <Field label="Empresa:" info={user.company} />
                    <Field label="Localizacao:" info={user.location} />
                    <Field label="Email" info={user.email} />
                    <Field label="Sobre:" info={user.bio} />
                </div>
            </div>
        </>
    )
};

export default UserView