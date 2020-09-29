import React from 'react'


class Cards extends React.Component {
    state = {
        userApi: [],
        user: "lbu0413"
    }
    componentDidMount(){
        this.fetchGithub(this.state.user)
    }

    fetchGithub = (user) => {
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
    render(){
        return(
            <div className="userContainer">
              {this.state.userApi.login}
              {this.state.userApi.name}
              {this.state.userApi.bio}
              <img src={this.state.userApi.avatar_url} width="200px"/>
            </div>
        )
    }
}

export default Cards