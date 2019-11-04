import React, { Component } from 'react';
import Button from '../components/Button';


class User extends Component {

  renderLoginLogout() {
    debugger;
    // return <Button key="logout" klass='logout' handleClick={this.handleClick} />
  }

  render() {

    return (
      <div className='user-interface'>
      "User"
      {this.renderLoginLogout()}
      </div>
    )

}}

export default User;
