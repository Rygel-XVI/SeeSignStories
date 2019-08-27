import React, { Component } from 'react';
import LinkButton from '../components/LinkButton'

class NavBar extends Component {


  render () {
    return (
      <div className="nav-bar" >
      <LinkButton text="Home" klass="button nav-button"/>
      <LinkButton text="About the site" klass="button nav-button" />
      </ div>
    )
  }
}

export default NavBar;
