import React,{ useState, useEffect } from 'react';
import axios from 'axios';

const Commits = ({ match }) => {
    const [commit, setCommit] = useState([]);
    const [user, setUser] = useState(match.params.userLogin);
    const [repos, setRepo] = useState(match.params.repo);

    useEffect(() => {
        axios.get("https://api.github.com/repos/" + user + "/" + repos + "/commits")
            .then(response => {
                setCommit(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [user, repos]);

    const commitResults = commit.slice(0,10);

    return(
        <div className="list-repos">
            <div className="list-title">
                <h3>Commits do repositorio</h3>
                <div className="list-items">
                    {
                        commitResults.map(line => (
                            <div className="list-item" key={line.node_id}>
                                {line.sha}
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
};

export default Commits