import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom'
import StoryOfWeek from './containers/StoryOfWeek'

export default (
  <BrowserRouter>
    <Switch id='routes'>
      <Route exact path="/" component={Main} />
      <Route path="/grades" component={Grades} />
      <Route path="/genres" component={Genres} />
      <Route path="/arlevel" component={ARLevel} />
    </Switch>
</BrowserRouter>
)
