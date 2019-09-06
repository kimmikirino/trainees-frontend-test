import React from 'react'
import './repoList.css'

const RepoList = ({repositorie}) => (
    <section className = 'repoLine'>
            <h4>Description: {repositorie.description}</h4>
            {repositorie.language !== null ? <h4>Language: {repositorie.language}</h4> : <h4>No language</h4>}
    </section>
)


export default RepoList