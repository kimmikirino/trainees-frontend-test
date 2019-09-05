import React, { useState, useEffect } from 'react';
import UserRep from '../Components/UserRepos';
import Header from "../Components/Header"
import Hero from "../Components/Header/Hero"
import { getUserRepos } from '../API/Data';

const UserRepos = ( {match} ) => {
    const [repos, setRepos] = useState([]);
    console.log(repos)
    useEffect(() => {
        getUserRepos(match.params.login).then(({ data }) => {
            setRepos(data)
        }).catch((error) => {
            console.log(error)
        })
    }, [match.params.login]);  

    
    return (
        <>
            <header>
                <Header login={match.params.login}/>
                <Hero />
            </header>
            <div className="container">
                { repos.map(repo => <UserRep userR={repo} key={repo.id} />) }
            </div>
        </>
    );
}

export default UserRepos