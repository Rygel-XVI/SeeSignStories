import React, { Component } from 'react';
import Button from '../components/Button'

class ButtonNav extends Component {

  render() {
    return (
      <div className="buttons-nav">
      <Button text="Genre" klass="buttons-1 red" />
      <Button text="Grade" klass="buttons-1 orange" />
      <Button text="AR Level" klass="buttons-1 green" />
      </ div>
    )
  }

}

export default ButtonNav;
