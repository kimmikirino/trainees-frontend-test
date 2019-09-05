import React from 'react';
import './button.css';

const Button = ({type, children, ...props}) => {
  return (
    <div className="box-button">
        <button className="btn" type={type} {...props}>{children}</button>
    </div>
  );
};

export default Button;