import React, { Component } from 'react';
import Button from '../components/Button'

class ButtonNav extends Component {

  render() {
    return (
      <div className="buttons-nav">
      <Button text="Genre" klass="buttons-1 red" path="genre"/>
      <Button text="Grade" klass="buttons-1 orange" path="grade"/>
      <Button text="AR Level" klass="buttons-1 green" path="arlevel"/>
      </ div>
    )
  }

}

export default ButtonNav;
