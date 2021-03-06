import React, { Component } from 'react';
import { withRouter } from 'react-router'

const LinkButton = ({klass, text, path, history}) => (
    <button onClick={(event) => history.push(`/${path}`)} data-src={`seesignstories.herokuapp.com/${path}`} className={klass} type="button" >{text}</ button>
)

export default withRouter(LinkButton)
