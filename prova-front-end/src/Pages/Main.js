import React, {useState,useEffect} from 'react'
import {getMyProfile} from '../API/GitHub/index'
import ProfileInfo from '../Components/ProfileInfo'
import Header from '../Components/Header'
import Hero from '../Components/Header/hero'
import RepoButton from '../Components/RepoButton'
import '../App.css'
import Footer from '../Components/Footer'

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
            <section className = 'content'>
                <ProfileInfo profile = {profile} />  
                <RepoButton profile ={profile}/>
                <Footer/>
            </section>
        </>
    )
}

export default Main