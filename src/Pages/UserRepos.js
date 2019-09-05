import React, { useState, useEffect } from 'react';
import UserRep from '../Components/UserRepos';
import Header from "../Components/Header"
import { getUserRepos } from '../API/Data';

//let login = 'LucasMSnts' //test
const UserRepos = ( login ) => {
    const [repos, setRepos] = useState([]);
    console.log(login)
    useEffect(() => {
        getUserRepos(login.login).then(({ data }) => {
            setRepos(data)
        }).catch((error) => {
            console.log(error)
        })
    }, [login.login]);  

    
    return (
        <>
            <div>
                {
                    repos.map(repo => <UserRep userR={repo} key={repo.id} />)
                }
            </div>
        </>
    );
}

export default UserRepos