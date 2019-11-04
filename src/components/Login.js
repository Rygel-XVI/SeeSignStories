import React, { Component } from 'react';
import Button from './Button';


class Login extends Component {

  renderLoginLogout() {
    debugger;
    return <Button key="logout" klass='logout' handleClick={this.handleClick} />
  }

  render() {

    return (
      <div classNames='login'>
      <h1>"login"</h1>
        {this.renderLoginLogout()}
      </div>
    )

}}

export default Login;
