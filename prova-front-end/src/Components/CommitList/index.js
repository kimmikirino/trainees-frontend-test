import React from 'react'
import './commitList.css'

const CommitList = ({commits}) => 
(
    <section>
        <h1>Title: {commits.commit.message}</h1>
        <h6>Author: {commits.commit.author.name}</h6>
        {commits.commit.verification.verified ? <h6>Status: Verified</h6> : <h6>Status: Not verified</h6>}
    </section>
)


export default CommitList