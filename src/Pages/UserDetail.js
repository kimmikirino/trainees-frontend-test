import React, { useState, useEffect } from 'react'
import "./main.css"
import UserDet from "../Components/UserDetail"
import { getUserByName } from "../API/Data"
import Header from "../Components/Header"
import Hero from "../Components/Header/Hero"


const UserDetail = ( {match} ) => {

    const [user, setUser] = useState();
    useEffect(() => {
        getUserByName(match.params.login).then(({ data}) => { 
        setUser(data)
    })
    }, [match.params.login]);

    return (
        <>      
            <header>
                <Header />                
                <Hero />
            </header>
            <div> 
                { <UserDet user={user} /> }
            </div>
        </>
    );
}

export default UserDetail;