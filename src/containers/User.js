import React, { Component } from 'react';
import Button from '../components/Button';


class User extends Component {

  renderLogout() {
    debugger;
    // return <Button key="logout" klass='logout' handleClick={this.handleClick} />
  }

  render() {

    return (
      <div className='user-interface'>
      "User"
      {this.renderLogout()}
      </div>
    )

}}

export default User;
