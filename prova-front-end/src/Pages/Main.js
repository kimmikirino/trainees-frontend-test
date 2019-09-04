import React, {useState,useEffect} from 'react'
import {getMyProfile} from '../API/GitHub/index'
import ProfileInfo from '../Components/ProfileInfo'
import Header from '../Components/Header'
import Hero from '../Components/Header/hero'
import {Link} from 'react-router-dom'
const Main = () => {
    const [profile,setProfile] = useState([])

    useEffect(() =>{
        getMyProfile()
        .then( ({data}) =>{
            setProfile(data)
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
        <ProfileInfo profile = {profile} />  
        <Link to ='/repos' profile = {profile}><button >Number of Repos:{profile.public_repos}</button></Link>
        </>
    )
}

export default Main