import React, {useState,useEffect} from 'react'
import {getUserByLogin} from '../API/GitHub/index'
import {Link} from 'react-router-dom'
import ProfileInfo from '../Components/ProfileInfo'
import Header from '../Components/Header'
import Hero from '../Components/Header/hero'

const UserInfo = ({match,history}) => {
    const [profile,setProfile] = useState([])
    
    useEffect(() =>{
        getUserByLogin(match.params.login)
        .then(({data}) =>{
            setProfile(data)
        })
        .catch((error) =>{
            alert('User not found')
            history.goBack()
            console.log(error)
        })
    })

    return(
        <>
        <header>
            <Header/>
            <Hero/>
        </header>
        <ProfileInfo profile = {profile} />  
        <Link to ={`/${match.params.login}/repos`} profile = {profile}><button >Number of Repos:{profile.public_repos}</button></Link>
        </>
    )
}

export default UserInfo