import React from 'react';
import { Link } from 'react-router-dom'

import './Header.css';

const Header = ({ label, onClick, onChange, placeholder }) => {
        return (
            <div className="fixed-menu">
                <div className="menu-box">
                    <div className="menu-options">
                        <h3><Link to="/">HOME</Link> | {label ? label : ""}</h3>
                    </div>
                    <div className="menu-options">
                        <div className="search-box">
                            <input type="text" placeholder={placeholder} onChange={onChange} />
                            <button type="submit" onClick={onClick}>Procurar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
};

export default Header;