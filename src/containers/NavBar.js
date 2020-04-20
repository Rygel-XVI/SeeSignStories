import React, { Component } from 'react';
import LinkButton from '../components/LinkButton'

class NavBar extends Component {


  render () {
    return (
      <div className="nav-bar" >
      <LinkButton text="Home" klass="nav-button" path="" />
      <LinkButton text="AR Level" klass="nav-button red" path="arlevel" />
      <LinkButton text="Grade" klass="nav-button orange" path="gradelevel"/>
      <LinkButton text="Chapter Books" klass="nav-button yellow" path="chapterbooks" />
      <LinkButton text="Genre" klass="nav-button green" path="genre"/>
      <LinkButton text="PDFs" klass="nav-button purple" path="pdf" />
      <LinkButton text="About" klass="nav-button" path="about"/>
      </ div>
    )
  }
}

export default NavBar;
