import React from 'react';
import './button.css';

const Button = ({children, ...props}) => {
  return (
    <div className="box-button">
        <button type="button" {...props}>{children}</button>
    </div>
  );
};

export default Button;