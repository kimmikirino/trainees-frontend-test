import React from 'react'
import "./box.css"

const Field = ({ label, info }) => (
    <div className="data-box">
        <label><strong>{label}</strong></label>
        <div className="data-info">
            {info ? info : "Sem informação."}
        </div>
    </div>
);

export default Field