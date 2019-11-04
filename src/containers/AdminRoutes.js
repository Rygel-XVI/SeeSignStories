import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import User from './User'


const AdminRoutes = ({ requireAuth }) => (
  <div className='admin-routes'>
    <Route exact path="/user/interface" component={User} onEnter={requireAuth()}/>
  </div>
)

export default AdminRoutes;
