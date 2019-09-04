import React from 'react'

const CommitList = ({commits}) => 
(
    <section>
        <h1>{commits.commit.message}</h1>
        <h6>{commits.commit.author.name}</h6>
        {commits.commit.verification.verified ? <h6>Verified</h6> : <h6>Not verified</h6>}
    </section>
)


export default CommitList