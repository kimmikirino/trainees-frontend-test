import React, {useState,useEffect} from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Header/hero'
import {getUserCommitsByID} from '../API/GitHub/index'
import CommitList from '../Components/CommitList'
import Input from '../Components/Input'
import ResultFilter from '../Components/ResultFilter'

const Commits = ({match}) => {
    const [commits,setCommits] = useState([])
    const [filtro,setFiltro] = useState('')
    const[result,setResult] = useState([])
    
    
    useEffect(() =>{
        getUserCommitsByID(match.params.login,match.params.id)
        .then(({data}) =>{
            setCommits(data)
        })
        .catch((error) =>{
            console.log(error)
        })
    },[])


    const handleFiltro = (event) => setFiltro(event.target.value)

    function checkCommit(commit,string,string2){
        return string === string2 ? commit : ""
    }

    const handleSearch = (commits,filtro) => {
        setResult(commits.filter(commit => checkCommit(commits,commit.commit.message,filtro)))
    }

    return(
        <>
        <header>
            <Header/>
            <Hero/>
        </header>
        <section>
            <Input label='Commit Filter' placeholder='KeyWord' value={filtro} onChange= {handleFiltro}/>
            <button onClick ={()=>{handleSearch(commits,filtro)}}>Search</button>
            {result.length !== 0 ? <ResultFilter result = {result}/>:<h6>Type your search correctly</h6>}
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