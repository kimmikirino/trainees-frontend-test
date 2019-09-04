import React from 'react';

import './Header.css';

const Header = ({ user }) => (
    <div className="fixed-menu">
        <div className="menu-box">
            <div className="menu-options">
                <h3>{user.name}</h3>
            </div>
            <div className="menu-options">
                <div className="search-box">
                    <input type="text" placeholder="Procurar usuario" />
                        <button type="submit">Procurar</button>
                </div>
            </div>
        </div>
    </div>
);

export default Header;