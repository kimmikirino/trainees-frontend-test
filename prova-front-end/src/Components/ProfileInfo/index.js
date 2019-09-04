import React from 'react'

const ProfileInfo = ({profile}) => (
    <section>
        <img src={profile.avatar_url} alt='Icone Usuario'/>
            <h1>{profile.name}</h1>
            <h3>{profile.login}</h3>
            <h4>Description: {profile.bio}</h4>
            <h5>Company: {profile.company}</h5>
            <h5>Followers: {profile.followers}</h5>
            <h5>Following: {profile.following}</h5>
            <h5>Location: {profile.location}</h5>
    </section>
)


export default ProfileInfo