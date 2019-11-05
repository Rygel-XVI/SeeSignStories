// import React from 'react'
// import {useUser} from './context/auth'
// import AuthenticatedApp from './AuthenticatedApp'
// import UnauthenticatedApp from './UnauthenticatedApp'
//
//
// function App() {
//   const user = useUser()
//   return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
// }
// export App

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Main from './containers/Main'
import About from './components/About'
import ARLevel from './containers/ARLevel'
import GradeLevel from './containers/GradeLevel'
import Genre from './containers/Genre'
import SignedPDFs from './components/SignedPDFs'
import Banner from './components/Banner'
import NavBar from './containers/NavBar'
import DockedNav from './containers/DockedNav'
import AdminRoutes from './containers/AdminRoutes'
import User from './containers/User'
import PrivateRoute from './components/PrivateRoute'
import Login from './components/Login'

const LoggedInContext = React.createContext('logged-in');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      etag: '',
      videos: [],
      opts: {
        height: '100%',
        width: '100%',
      }
    }
  }

  // setting tag filters for routes
  getARLevels() {
    let arLevels = this.state.videos.map(video => `${video.ar_lvl_low}-${video.ar_lvl_high}`)
    return [...new Set(arLevels)].sort()
  }


  renderNav() {
    return window.innerWidth > 740 ? <NavBar /> : <DockedNav />
  }


  // on load
  fetchVideos() {
    // fetch('https://seesignstories-rails-api.herokuapp.com/api/channel/index')
    fetch('http://localhost:3000/api/video')

    .then((resp) => resp.json())
    .then((json) => {
      this.setState({
        videos: json
      })
    })
  }

  // requireAuth() {
  //   debugger;
  //   return this.state.loggedIn
  // }

  componentDidMount() {
    this.fetchVideos()
  }

  render() {

    return (
      <div className="App">

      <Banner />
      <hr border="50px" color='black'/>
      <br />
      <div className='router'>
      <Router>
        {this.renderNav()}
        <div className='routes'>
          <Switch>

            <Route exact path="/" render={() => <Main videos={this.state.videos} />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/pdf" render={() => <SignedPDFs />} />
            <Route path="/arlevel" render={() => <ARLevel
              videos={this.state.videos}
              title="Accelerated Reader Level"
              arLevels={this.getARLevels()}
            />} />
            <Route path="/gradelevel" render={() => <GradeLevel
              videos={this.state.videos}
              title="Grade Level"
            />} />
            <Route path="/genre" render={() => <Genre
              videos={this.state.videos}
              text="genre"
            />} />

            <Route path="/login" render={() => <Login loggedIn={this.state.loggedIn} />} />

            <PrivateRoute path="/iteachwithmyhands" component={User} loggedIn={this.state.loggedIn} />
          </Switch>
        </div>
      </ Router>
      </div>
      </ div>
    )}
}

export default App;


// <Route exact path="/user/interface" component={User} onEnter={this.requireAuth()}/>
