import React from 'react'
import { Link } from 'react-router-dom'

const LinkButton = ({klass, text, path, history}) => (
  <Link to={path}>
  <button className={klass}>{text}</button>
  </Link>
)

export default LinkButton
