import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

import Login from './Login'
import User from '../containers/User'


class PrivateRoute extends Component {

  renderPrivateRoute() {
    debugger;
    return this.props.loggedIn ? <Route {...this.props} /> : <Redirect to="/login" />
  }

  render() {

    return (
      <div>
        {this.renderPrivateRoute()}
      </div>
    )}
}


export default PrivateRoute
