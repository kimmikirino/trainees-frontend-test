import React, { useState } from 'react';
import './userForm.css';
import LabelInput from '../LabelInput/index.js';
import Button from '../Button/index.js';

const UserForm = () => {
  
  const [login, setLogin] = useState('');

  const handleChange = event => setLogin(event.target.value);
  
  const handleClick = () => setUser(login);

  return (
    <div>
      <LabelInput type="text" label="Login do Usuário" onChange={handleChange}/>
      <Button type="submit" className="btn" onClick={handleClick}>Procurar</Button>
    </div>
  );
};

export default UserForm;