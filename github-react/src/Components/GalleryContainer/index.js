import React, { useState, useEffect } from 'react';
import './galleryContainer.css'
import UserItem from '../UserItem/index.js';
import LabelInput from '../LabelInput/index.js'
import Button from '../Button/index.js'
import { getUserByLogin } from '../../API/Users/index.js';

const GalleryContainer = () => {
  const [user, setUser] = useState('hechprad');
  const [login, setLogin] = useState('');
  
  useEffect(() => {
    user.length > 0 ? getUserByLogin(user).then(({ data }) => {
      setUser(data);
    }).catch((err) => {
      console.log("error: " + err);
    }): console.log("Aguardando Login");
  }, [user]);

  const handleChange = event => setLogin(event.target.value);
  
  const handleClick = () => setUser(login);
  
  return (
    <div className="gallery-container">
      <UserItem user={user} key={user.id} />
      <LabelInput type="text" label="Login do Usuário" onChange={handleChange}/>
      <Button className="btn" onClick={handleClick}>Procurar</Button>
    </div>
  );
};

export default GalleryContainer;