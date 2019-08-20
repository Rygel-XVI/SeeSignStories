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

// return (
//   <div className="buttons-nav">
//   <button className="buttons-1 red" >Genre</ button>
//   <button className="buttons-1 orange" >Grade</ button>
//   <button className="buttons-1 green" >AR Level</ button>
//   </ div>
//
// )
