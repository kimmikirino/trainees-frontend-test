import React from 'react'
import './resultFilter.css'

const ResultFilter = ({result}) => (
    <>
        {result.map(message => 
        <section key = {message.node_id} className ='commits'>
            <h1>{message.commit.message}</h1>
            <h6>{message.commit.author.name}</h6>
            {message.commit.verification.verified ? <h6 >Verified</h6> : <h6>Not verified</h6>}
            <h6>Date: {message.commit.committer.date.substring(0,9)}</h6>
            <h6>Time: {message.commit.committer.date.substring(11,16)}</h6>
        </section>
        )}        
    </>
)


export default ResultFilter