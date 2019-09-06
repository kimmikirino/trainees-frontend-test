import React, { useState, useEffect } from 'react';
import axios from 'axios';

import UserView from "../Components/UserView"
import UserReposView from "../Components/UserReposView"
import Header from "../Components/Header"

import "./main.css"

const Main = ({ match }) => {
    const [userInfo, setUserInfo] = useState(null);
    const [userRepos, setUserRepos] = useState([]);
    const [username, setUsername] = useState(
        match.params.userLogin ? match.params.userLogin : "andretanaka");
    const [login, setLogin] = useState("");

    useEffect(() => {
        axios.get("https://api.github.com/users/" + username)
            .then(response => {
                setUserInfo(response.data);
            })
            .catch(function (error) {
                console.log(error);
                window.alert("Usuário " + username + " não encontrado.");
                window.location.href = ("/");
            });

        axios.get("https://api.github.com/users/" + username + "/repos")
            .then(response => {
                setUserRepos(response.data);
            })
            .catch(function (error) {
                console.log(error);
                window.alert("Usuário " + username + " não encontrado.");
                window.location.href = ("/");
            })
    }, [username]);

    const handleChange = e => {
        setLogin(e.target.value);
    };
    const handleClick = () => {
        setUsername(login);
    };

    return (
        userInfo ? (
            <>
                <header>
                    <Header label={userInfo.name ? userInfo.name : userInfo.login} onChange={handleChange}
                            onClick={handleClick} placeholder="Procurar usuário"/>
                </header>
                <div className="body-main">
                    <UserView user={userInfo} />
                    <UserReposView repos={userRepos} key={userRepos.id}/>
                </div>
            </>
     ) : "Carregando..."
    )
};

export default Main;