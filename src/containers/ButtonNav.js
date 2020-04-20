import React, { Component } from 'react';
import LinkButton from '../components/LinkButton'

class ButtonNav extends Component {

  render() {
    return (
      <div className="buttons-div">
      <LinkButton text="AR Level" klass="button link-button red" path="arlevel" />
      <LinkButton text="Grade" klass="button link-button orange" path="gradelevel"/>
      <LinkButton text="Genre" klass="button link-button green" path="genre"/>
      <LinkButton text="Chapter Books" klass="button link-button yellow" path="chapterbooks"/>
      </ div>
    )
  }

}

export default ButtonNav;
