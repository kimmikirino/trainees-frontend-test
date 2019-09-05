import React, {useState,useEffect} from 'react'
import {getMyProfile,getMyRepo} from '../API/GitHub/index'
import RepoList from '../Components/RepoList/index'
import Header from '../Components/Header'
import {Link} from 'react-router-dom'
import Footer from '../Components/Footer'
import '../App.css'

const Repos = () => {
    const [user,setUser] = useState([])
    const [repos,setRepo] = useState([])

    useEffect(() =>{
        getMyProfile()
        .then(({data}) =>{
            setUser(data)
        })
        .catch((error) =>{
            console.log(error)
        })
    },[])
    
    useEffect(() =>{
        getMyRepo()
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
        </header>
        <section className= 'showRepo'>
            <img src= {user.avatar_url} alt= 'Imagem perfil'/>
            <section className ='Repo'>
                <h1 className='repTitle'>Repositories</h1>
                {
                repos.map(
                    repo =>
                    <section key ={repo.id}>
                        <Link to = {`/${user.login}/repos/${repo.name}/commits`}><h1>{repo.name}</h1></Link>
                        <RepoList repositorie = {repo} key ={repo.id}/>
                    </section> 
                    )
                }
            </section>
        </section>
        <Footer/>
        </>
    )
}

export default Repos