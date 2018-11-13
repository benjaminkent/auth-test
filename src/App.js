import React, { Component } from 'react'
import { Router, Route, Switch } from 'react-router-dom'

import './App.css'
import Home from './Pages/Home'
import Callback from './Pages/Callback'

import Auth from './Auth/auth'
import history from './history'

const auth = new Auth()

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication()
  }
}

class App extends Component {
  render() {
    return (
      <Router history={history} component={App}>
        <div>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <Home auth={auth} {...props} />}
            />
            <Route
              path="/callback"
              render={props => {
                handleAuthentication(props)
                return <Callback {...props} />
              }}
            />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
