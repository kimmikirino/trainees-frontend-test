import React, { useState, useEffect } from 'react';
import UserRep from '../Components/UserRepos';
import Header from "../Components/Header"
import { getUserRepos } from '../API/Data';

const UserRepos = ( login ) => {
    //let login = 'LucasMSnts' //test
    const [repos, setRepos] = useState([]);
    console.log(repos)
    useEffect(() => {
        getUserRepos(login.match.params.login).then(({ data }) => {
            setRepos(data)
        }).catch((error) => {
            console.log(error)
        })
    }, [login.match.params.login]);  

    
    return (
        <>
            <Header />
            <div>
                { repos.map(repo => <UserRep userR={repo} key={repo.id} />) }
            </div>
        </>
    );
}

export default UserRepos