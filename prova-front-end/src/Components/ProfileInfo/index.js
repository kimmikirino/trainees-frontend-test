import React from 'react'
import './profileInfo.css'
const ProfileInfo = ({profile}) => (
    <section className ='user'>
        <img src={profile.avatar_url} alt='Icone Usuario'/>
        <section>
            <h1>{profile.name}</h1>
            <h3>{profile.login}</h3>
            <h4>Description: {profile.bio}</h4>
            <h5>Company: {profile.company}</h5>
            <h5>Followers: {profile.followers}</h5>
            <h5>Following: {profile.following}</h5>
            <h5>Location: {profile.location}</h5>
        </section>
    </section>
)


export default ProfileInfo