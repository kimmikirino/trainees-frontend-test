import React,{ useState, useEffect } from 'react';
import axios from 'axios';

import Header from "../Components/Header";
import Field from "../Components/Fields/Box";

import "./commits.css"

const Commits = ({ match }) => {
    const [commit, setCommit] = useState([]);
    const [user, setUser] = useState(match.params.userLogin);
    const [repos, setRepo] = useState(match.params.repo);

    const [term, setTerm] = useState("");
    const [subTerm, setSubTerm] = useState("");

    useEffect(() => {
        axios.get("https://api.github.com/repos/" + user + "/" + repos + "/commits")
            .then(response => {
                setCommit(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                window.alert("Usuário " + user + " e/ou repositório " + repos + " não encontrado.");
                window.location.href = ("/");
            });
    }, [user, repos]);

    useEffect(() => {
        const commitFiltered = commit.filter((item) => item.commit.message.includes(term));
        setCommit(commitFiltered)
    }, [term]);

    const commitResults = commit.slice(0,10);
    const handleChange = e => setSubTerm(e.target.value);
    const handleClick = () => setTerm(subTerm);

    const dateFormat = (dateBefore) => (
         dateBefore.substr(8,2) + "/" +
            dateBefore.substr(5,2) + "/" + dateBefore.substr(1,3)
    );

    const timeFormat = (timeBefore) => (
        timeBefore.substr(11,2) + ":" +
        timeBefore.substr(14,2)
    );

    return(
        <>
            <header>
                <Header user={""} onChange={handleChange} onClick={handleClick}
                        placeholder="Procurar commit" />
            </header>
            <div className="body-main">
                <div className="commit-box">
                    <h2>Últimos 10 commits do repositório {repos}</h2>
                    {
                        commitResults.map(line => (
                            <div className="commit-item" key={line.node_id}>
                                <h4>SHA: {line.sha}</h4>
                                <ul>
                                    <li><Field label="Mensagem:" info={line.commit.message} /></li>
                                    <li><Field label="Autor:" info={line.commit.author.name} /></li>
                                    <li><Field label="Email:" info={line.commit.author.email} /></li>
                                    <li><Field label="Data do commit:" info={dateFormat(line.commit.author.date)} /></li>
                                    <li><Field label="Hora do commit:" info={timeFormat(line.commit.author.date)} /></li>
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
};

export default Commits