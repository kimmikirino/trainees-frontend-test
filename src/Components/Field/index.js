import React from 'react'
import "./field.css"


const Field = ({ label, info }) => (
    <div className="user-detail">
        <label><strong>{label}</strong></label>
        <div className="user-data">
            {info ? info : "Informacao nao informada."}
        </div>
    </div>
);

export default Field