import React, {useState,useEffect} from 'react'
import {getUserByLogin,getReposByLogin} from '../API/GitHub/index'
import ProfileInfo from '../Components/ProfileInfo'
import RepoList from '../Components/RepoList/index'
import Header from '../Components/Header'
import Hero from '../Components/Header/hero'
import {Link} from 'react-router-dom'

const UserRepo = ({match,history}) => {
    const [user,setUser] = useState([])
    const [repos,setRepo] = useState([])

    useEffect(() =>{
        getUserByLogin(match.params.login)
        .then( ({data}) =>{
            setUser(data)
        })
        .catch((error) =>{
            console.log(error)
        })
    },[])
    
    useEffect(() =>{
        getReposByLogin(match.params.login)
        .then( ({data}) =>{
            setRepo(data)
        })
        .catch((error) =>{
            console.log(error)
        })
    },[])
    
    return(
        <>
        <header>
            <Header/>
            <Hero/>
        </header>
            <ProfileInfo profile = {user}/>
            {
               repos.map(
                    repo =>
                    <section key ={repo.id}>
                        <Link to = {`/${user.login}/repos/${repo.name}/commits`}><h1>{repo.name}</h1></Link>
                        <RepoList repositorie = {repo} key ={repo.id}/>
                    </section>
                )
            }
        </>
    )
}

export default UserRepo