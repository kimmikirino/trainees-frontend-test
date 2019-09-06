import React, {useState,useEffect} from 'react'
import Header from '../Components/Header'
import {getUserCommitsByID} from '../API/GitHub/index'
import CommitList from '../Components/CommitList'
import Input from '../Components/Input'
import ResultFilter from '../Components/ResultFilter'
import Footer from '../Components/Footer'

const Commits = ({match}) => {
    const [commits,setCommits] = useState([])
    const [filtro,setFiltro] = useState('')
    const[result,setResult] = useState([])
    
    useEffect(() =>{
        getUserCommitsByID(match.params.login,match.params.id)
        .then(async ({data}) =>{
            setCommits(data)
        })
        .catch((error) =>{
            console.log(error)
        })
    },[match.params.login,match.params.id])

    const handleFiltro = (event) => setFiltro(event.target.value)

    function checkCommit(commit,string,string2){
        let stringlwr = string.toLowerCase();
        let string2lwr = string2.toLowerCase();
        return stringlwr.includes(string2lwr) ? commit : ""
    }

    const handleSearch = (commits,filtro) => {
        setResult(commits.filter(commit => checkCommit(commits,commit.commit.message,filtro)))
    }

    return(
        <>
        <header>
            <Header/>
        </header>
        <section className = 'contentCommit'>
            <section className='commitFilter'>
                <Input label='Commit Filter' placeholder='KeyWord' value={filtro} onChange= {handleFiltro}/>
                <button onClick ={()=>{handleSearch(commits,filtro)}}>Search</button>
            </section>
                    {result.length !== 0 ?( 
                    <section> 
                        <h1 id='titleResult'>Result found: {result.length}</h1>
                        <section className='resultFilter'>
                            <ResultFilter result = {result}/>
                        </section>
                    </section>)
                        :
                        <section>
                            <h6 id= 'noResult'>Type your search correctly</h6>
                        </section>
                    }
            <h1 id = 'titleCommit'>Commits</h1>
            <section className = 'listCommit'>
            {
                commits.map((commit,i) => 
                i < 10 ? 
                    <CommitList commits = {commit} key={commit.node_id}/>
                 : ''
                )
            }
            </section>
        </section>
        <Footer/>
        </>
    )
}

export default Commits