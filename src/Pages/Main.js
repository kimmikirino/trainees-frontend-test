import React, { useState, useEffect } from 'react'
import "./main.css"
import UserDetail from "../Components/UserDetail"
import { getUserByName } from "../API/Data"

const Main = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUserByName().then(({ data }) => {
            setUser(data)
        }).catch((error) => {
            console.log(error)
        })
    }, []);

    return (
        <>
            <div>
                {
                //console.log(user)
                <UserDetail user={user} key={user.name} />
                }
            </div>
        </>
    );
}

export default Main;