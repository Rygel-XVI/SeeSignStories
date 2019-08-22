import React, { Component } from 'react';

const Button = ({klass, text, handleClick}) => (
  <button key={text} className={klass} onClick={handleClick}>{text}</ button>
)

export default Button
