import React from 'react'

const ResultFilter = ({result}) => (
    <section>
        {result.map(message => 
        <section key = {message.node_id}>
            RESULTADO:
            <h1>{message.commit.message}</h1>
            <h6>{message.commit.author.name}</h6>
            {message.commit.verification.verified ? <h6 >Verified</h6> : <h6>Not verified</h6>}
        </section>
        )}        
    </section>
)


export default ResultFilter