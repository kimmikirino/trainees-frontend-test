import React from 'react';

import './Header.css';

const Header = ({ user, onClick, onChange }) => {
        return (
            <div className="fixed-menu">
                <div className="menu-box">
                    <div className="menu-options">
                        <h3>{user.name ? user.name : "Usuario sem nome"}</h3>
                    </div>
                    <div className="menu-options">
                        <div className="search-box">
                            <input type="text" placeholder="Procurar usuario" onChange={onChange} />
                            <button type="submit" onClick={onClick}>Procurar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default Header;