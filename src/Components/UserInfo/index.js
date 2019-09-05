import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './userInfo.css'


class UserInfo extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      user: []
    }
    // this.api = axios.create({
    //   baseURL = 'https://api.github.com'
    // })
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/luana2813`)
      .then(res => {
        console.log(res)
        const user = res.data
        this.setState({ user })
      })
      // api.get(`/repos/${repoInput}`)
  }

  render() {
    return (
      <>
        <div className="user-info">
          <div className="profile-photo">
            <div className="photo"><img src={this.state.user.avatar_url} alt="profile pic"/></div>
          </div>

          <div className="user-detail">
            <div><p><b>Login: </b> {this.state.user.login} </p></div>
            <div><p><b>Followers: </b> {this.state.user.followers} </p></div>
            <div><p><b>Following: </b> {this.state.user.following} </p></div>
            <div>
              <span><b>Repos: </b> {this.state.user.public_repos} </span>
              <span>
                <Link to="/repos">Click here to see my repos</Link>
              </span>
            </div>
            <div><p><b>Type of account: </b> {this.state.user.type} </p></div>
          </div>
        </div>

        {/* <div className="">
          <input />
          <button>Submit</button>
        </div> */}
      </>
    )
  }
}

export default UserInfo