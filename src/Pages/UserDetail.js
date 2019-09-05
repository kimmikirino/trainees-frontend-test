import React, { useState, useEffect } from 'react'
import "./main.css"
import UserDet from "../Components/UserDetail"
import { getUserByName } from "../API/Data"
import Header from "../Components/Header"


const UserDetail = ( login ) => {

    const [user, setUser] = useState();
    useEffect(() => {
        getUserByName(login.match.params.login).then(({ data}) => {
        setUser(data)
    })
    }, [login.match.params.login]);

    return (
        <>      
            
            <div>
                {   
                    <UserDet user={user} />               
                }
            </div>
        </>
    );
}

export default UserDetail;