import React, {useState} from 'react'
import "./main.css"
import { Link } from "react-router-dom";
import LabelInput from '../Components/LabelInput';
import Header from "../Components/Header";
import Hero from "../Components/Header/Hero";

const Main = () => {

const [username, setUsername] = useState()
const handleChange = event => setUsername(event.target.value);

    return (
        <>  
            <header>
                <Header />
                <Hero />
            </header>
            <div className="container-search">                
                    <LabelInput label="Insira o login que deseja" 
                        type="text" 
                        placeholder="Usuario"          
                        onChange={handleChange}
                    />
                    <div>
                        <Link to={`/${username}`}><button>Buscar</button></Link>
                    </div> 
            </div>
        </>
    );
}

export default Main;