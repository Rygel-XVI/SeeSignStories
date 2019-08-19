import React, { Component } from 'react';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

class ButtonNav extends Component {

  render() {

    return (
      <div className="buttons-nav">
      <button className="buttons-1 red" >Genre</ button>
      <button className="buttons-1 orange" >Grade</ button>
      <button className="buttons-1 green" >AR Level</ button>
      </ div>

    )
  }

}

export default ButtonNav;
