import React, { useState, useEffect } from 'react'
import "./main.css"
import UserDetail from "../Components/UserDetail"
import { getUserByName } from "../API/Data"


let login = 'LucasMSnts' //test

const Main = ({ match }) => {
    
    const [user, setUser] = useState([null]);
    useEffect(() => {
        getUserByName(login).then(({ data }) => {
        setUser(data)
    })
    }, []);

    return (
        <>
            <div>
                {
                    <UserDetail user={user} key={user.id} />
                }
            </div>
        </>
    );
}

export default Main;