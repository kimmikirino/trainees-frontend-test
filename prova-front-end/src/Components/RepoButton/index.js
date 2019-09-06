import React from 'react'
import './repoButton.css'
import {Link} from 'react-router-dom'

const RepoButton = () => (
    <section className ='RepoLink'>
        <Link to ='/repos'><button>Acess Repositories</button></Link>
    </section>
)


export default RepoButton