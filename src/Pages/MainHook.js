import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserView from "../Components/UserView"
import UserReposView from "../Components/UserReposView"
import Header from "../Components/Header"

import "./mainhook.css"

const MainHook = ({ match }) => {
    const [UserInfo, setUserInfo] = useState(null);
    const [UserRepos, setUserRepos] = useState([]);
    const [Username, setUsername] = useState(
        match.params.userLogin ? match.params.userLogin : "andretanaka"
);
    const [login, setLogin] = useState("");

    //console.log(match.params.userLogin)

    useEffect(() => {
        axios.get("https://api.github.com/users/" + Username)
            .then(response => {
                setUserInfo(response.data);
                //console.log((UserInfo));
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        axios.get("https://api.github.com/users/" + Username + "/repos")
            .then(response => {
                setUserRepos(response.data);
                console.log((UserRepos));
            });
    }, [Username]);
    //console.log((UserRepos));
     const handleChange = e => setLogin(e.target.value);
     //const handleClick = () => setUsername(login);
    const handleClick = () => (window.location.href = "/users/" + login);

    return (
        UserInfo ? (
            <>
                <header>
                    <Header user={UserInfo} onChange={handleChange} onClick={handleClick} />
                </header>
                <div className="body-main">
                    <UserView user={UserInfo} />
                    <UserReposView repos={UserRepos} key={UserRepos.id}/>
                </div>
            </>
     ) : ""
    )
};

export default MainHook