import React from 'react'
import './Cards.css'


class Cards extends React.Component {
    state = {
        userApi: [],
        user: "lbu0413",
        followersApi: []
    }
    componentDidMount(){
        this.fetchGithubUser(this.state.user)
        this.fetchGithubFollowers(this.state.user)
    }

    fetchGithubUser = (user) => {
        fetch(`https://api.github.com/users/${user}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    userApi: data
                })
            })
            .catch(err => {
                debugger
            })
    }

    fetchGithubFollowers = (user) => {
        fetch(`https://api.github.com/users/${user}/followers`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                this.setState({
                    followersApi: data
                })
            })
            .catch(err => {
                debugger
            })
    }
    render(){
        return(
            <div>
                <h1>Github User Card</h1>
                <div className="userContainer">
                    <div className="userInfo">Username: {this.state.userApi.login}</div>
                    <div className="userInfo">Name: {this.state.userApi.name}</div>
                    <div className="userInfo">Bio: {this.state.userApi.bio}</div>
                    <img src={this.state.userApi.avatar_url} width="200px"/>
                </div>

                <h1>Github Followers Cards</h1>
                    {this.state.followersApi.map(follower => (
                  <div className="followersContainer">
                      <div className="followersInfo">{follower.login}</div>
                      <div className="followersInfo">{follower.name}</div>
                      <div className="followersInfo">{follower.bio}</div>
                      <img src={follower.avatar_url} width="200px" />
                  </div>
                    ))}
                </div>
           
            
        )
    }
}

export default Cards