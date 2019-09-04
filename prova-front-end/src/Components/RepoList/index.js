import React from 'react'

const RepoList = ({repositorie}) => (
    <section>
            <h4>Description: {repositorie.description}</h4>
            {repositorie.language !== null ? <h4>Language: {repositorie.language}</h4> : <h4>No language</h4>}
    </section>
)


export default RepoList