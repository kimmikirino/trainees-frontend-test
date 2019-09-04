import React, {useState,useEffect} from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Header/hero'
import {getUserCommitsByID} from '../API/GitHub/index'
import CommitList from '../Components/CommitList'

const Commits = ({match}) => {
    const [commits,setCommits] = useState([])
    useEffect(() =>{
        getUserCommitsByID(match.params.login,match.params.id)
        .then( ({data}) =>{
            setCommits(data)
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
        <section>
        {
            commits.map((commit,i) => 
            i < 10 ? 
            <section key={commit.node_id}>
                <CommitList commits = {commit} />
            </section> : ''
            )
        }
        </section>
        </>
    )
}

export default Commits