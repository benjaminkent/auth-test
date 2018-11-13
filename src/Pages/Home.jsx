import React, { Component } from 'react'

class Home extends Component {
  state = {
    profile: ''
  }

  login = () => {
    this.props.auth.login()
  }

  logout = () => {
    this.setState({ profile: {} })
    this.props.auth.logout()
  }

  componentDidMount() {
    // see if the user is logged in,
    // if logged in, then display the user's name
    if (this.props.auth.isAuthenticated()) {
      this.props.auth.getProfile((err, profile) => {
        this.setState({ profile, err })
      })
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1>Welcome {this.state.profile.given_name}!</h1>
          <img src={this.state.profile.picture} alt="user's profile" />
        </div>
        <button onClick={this.login}>Log In</button>
        <button onClick={this.logout}>Log Out</button>
      </div>
    )
  }
}

export default Home
