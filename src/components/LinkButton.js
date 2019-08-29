import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const LinkButton = ({klass, text, path, history}) => (
  <button className={klass}>
  <Link to={path}>{text}</Link>
  </button>
)

export default LinkButton
