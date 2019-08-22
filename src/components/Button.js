import React, { Component } from 'react';
import { withRouter } from 'react-router'

const Button = ({klass, text, path, history}) => (
    <button onClick={(event) => history.push(`/${path}`)} className={klass} type="button" >{text}</ button>
)

export default withRouter(Button)
