import React, {useState} from 'react'
import "./main.css"
import { Link } from "react-router-dom";
import LabelInput from '../Components/LabelInput'
import UserDetail from '../Components/UserDetail';
import Header from "../Components/Header"

//let login = 'LucasMSnts' //test

const Main = () => {

const [username, setUsername] = useState()
const handleChange = event => setUsername(event.target.value);

    return (
        <>        
           <LabelInput label="Insira o login que deseja" 
                type="text" 
                placeholder="User"          
                onChange={handleChange}
                className=""
            />
            <div className="menu-content">
                <Link to={`/${username}`}> <button onClick={() => <UserDetail user={username} />}>Buscar</button></Link>
            </div>
        </>
    );
}

export default Main;