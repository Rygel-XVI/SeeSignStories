import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'

import Login from './Login'


class PrivateRoute extends Component {

  renderPrivateRoute() {
    debugger;
    return this.props.loggedIn ? <Route { ...this.props } /> : <Redirect to='/login' compoennt={Login}/>
  }

  render() {

    return (
      <div>
        {this.renderPrivateRoute()}
      </div>
    )}
}

//
// = ({ loggedIn, ...props }) => (
//   {loggedIn ? <Route { ...props } /> : <Redirect to={Login}/>}
// )

export default PrivateRoute


// <Redirect to={{pathname: "/login", state: { from: location }
//   }}
// />
