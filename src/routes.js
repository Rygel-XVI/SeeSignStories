import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import StoryOfWeek from './containers/StoryOfWeek'
import Main from './containers/Main'

export default (
  <Router>
    <Switch id='routes'>
      <Route exact path="/" component={Main} />
    </Switch>
</Router>
)
