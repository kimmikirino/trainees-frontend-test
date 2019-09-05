import React, { useState, useEffect } from 'react';
import './userBody.css'
import UserItem from '../UserItem/index.js';
import LabelInput from '../LabelInput/index.js'
import Button from '../Button/index.js'
import { getUserByLogin } from '../../API/Users/index.js';

const UserBody = () => {
  const [user, setUser] = useState('hechprad');
  const [login, setLogin] = useState('');
  const [field, setField] = useState({login: ''});
  
  useEffect(() => {
    user.length > 0 ? getUserByLogin(user).then(({ data }) => {
      setUser(data);
    }).catch((err) => {
      console.log("error: " + err);
      alert("Usuário não encontrado!!");
      cleanField();
    }): console.log("Aguardando Login");
  }, [user]);

  const cleanField = () => {
    setField({login: ''});
  };

  const handleChange = event => {
    setLogin(event.target.value)
    const value = event.target.value;
    setField({[event.target.name]: value});
  };
  
  const handleClick = () => setUser(login);
  
  return (
    <div className="user-body-container">
      <UserItem user={user} key={user.id} />
      <LabelInput type="text" label="Login do Usuário" name="login" value={field.login} onChange={handleChange}/>
      <Button type="submit" className="btn" onClick={handleClick}>Procurar</Button>
    </div>
  );
};

export default UserBody;