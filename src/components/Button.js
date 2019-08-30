import React from 'react'

const Button = ({klass, text, handleClick}) => (
  <button key={text} className={klass} onClick={handleClick}>{text}</ button>
)

export default Button
