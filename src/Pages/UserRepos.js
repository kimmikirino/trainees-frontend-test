import React, { useState, useEffect } from 'react';
import UserRep from '../Components/UserRepos';
import { getUserRepos } from '../API/Data';

let login = 'LucasMSnts' //test
const UserRepos = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        getUserRepos(login).then(({ data }) => {
            setRepos(data)
        }).catch((error) => {
            console.log(error)
        })
    }, []);  

    
    return (
        <div>
            {
                repos.map(repo => <UserRep userR={repo} key={repo.id} />)
            }
        </div>
    );
}

export default UserRepos