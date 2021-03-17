import React, { Component } from "react";
import { getCommitsRepos } from "../API/Data"
import Header from "../Components/Header"
import Hero from "../Components/Header/Hero"
import RepCommits from '../Components/RepoCommits';


export default class RepoCommits extends Component {
    state = {
        commitsRepo: [],
        //commitsRepoInfo: {},
    }

    componentDidMount() {         
        this.loadCommits();        
    }

    loadCommits = async () => {        
        try {  
            const login = this.props.match.params.login;   
            const repo = this.props.match.params.repo;           

            const response = await getCommitsRepos(login , repo);  

            const commits  = response.data;

            this.setState({ commitsRepo: commits });
        } catch (err) {
            alert('Erro ao carregar os commits');
        }
    };

    render() {
        const { commitsRepo } = this.state;

        return (
            <>      
                <header>
                    <Header />                
                    <Hero />
                </header>
                <div className="container"> 
                    { 
                        commitsRepo.map(commit => <RepCommits repo={commit} key={commit.node_id}/>)
                    }   
                </div>
            </>
        );
    }
}