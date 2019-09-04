import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserView from "../Components/UserView"
import UserReposView from "../Components/UserReposView"
import Header from "../Components/Header"

import "./mainhook.css"

const MainHook = () => {
    const [UserInfo, setUserInfo] = useState(null);
    const [UserRepos, setUserRepos] = useState([]);

    useEffect(() => {
        axios.get("https://api.github.com/users/kimmikirino")
            .then(response => {
                setUserInfo(response.data);
                console.log((UserInfo));
            })
        axios.get("https://api.github.com/users/kimmikirino/repos")
            .then(response => {
                setUserRepos(response.data);
                //console.log((response.data));
            })
    }, []);

    return (
        UserInfo ? (
            <>
                <header>
                    <Header user={UserInfo} />
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