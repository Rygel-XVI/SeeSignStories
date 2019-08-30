import React, { Component } from 'react';
import LinkButton from '../components/LinkButton'

class DockedNav extends Component {

  render() {
    return (
      <div className="buttons-div docked">
      <LinkButton text="Home" klass="button link-button white" path="" />

      <LinkButton text="AR Level" klass="button link-button red" path="arlevel" />
      <LinkButton text="Grade" klass="button link-button orange" path="gradelevel"/>
      <LinkButton text="Genre" klass="button link-button green" path="genre"/>
      </ div>
    )
  }

}

export default DockedNav;
