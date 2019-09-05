import React, {useState,useEffect} from 'react'
import {getUserByLogin} from '../API/GitHub/index'
import {Link} from 'react-router-dom'
import ProfileInfo from '../Components/ProfileInfo'
import Header from '../Components/Header'
import Hero from '../Components/Header/hero'
import Footer from '../Components/Footer'

const UserInfo = ({match,history}) => {
    const [profile,setProfile] = useState([])
    
    useEffect(() =>{
        getUserByLogin(match.params.login)
        .then(async({data}) =>{
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
            <section className = 'content'>
                <ProfileInfo profile = {profile} />
                <section className = 'repoLinkUser'>
                    <Link to ={`/${match.params.login}/repos`} profile = {profile}><button >Acess repositories</button></Link>
                </section>
                <Footer/>  
            </section>
        </>
    )
}

export default UserInfo