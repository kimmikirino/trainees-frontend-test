import React, { Component } from 'react'
import axios from 'axios'
import './repo.css'


class Repo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      repository: []
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/luana2813/repos`)
    .then(res => {
      console.log(res.data)
      const repository = res.data
      this.setState({ repository })
    })      
  }
  render() {
    return (
      <>
      <div className="repos">
        {
          // console.log("me chamooou?" + this.state.repository.id)     
          this.state.repository.map(repo => {
            // console.log(repo)
            return(
              <div key={repo.id} className="repo">
                <p><b>Repository name: </b>{repo.name}</p>
                <p><b>Description: </b>{repo.description = 'dont have any description'}</p>
              </div>
            )
          })
        }
      </div>
      </>
    )
  }    
}


export default Repo