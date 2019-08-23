import React, { Component } from 'react';
import LinkButton from '../components/LinkButton'

class ButtonNav extends Component {

  render() {
    return (
      <div className="buttons-div">
      <LinkButton text="Genre" klass="button link-button red" path="genre" />
      <LinkButton text="Grade" klass="button link-button orange" path="gradelevel"/>
      <LinkButton text="AR Level" klass="button link-button green" path="arlevel"/>
      </ div>
    )
  }

}

export default ButtonNav;
