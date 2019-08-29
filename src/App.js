import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import routes from './routes'
import Main from './containers/Main'
import About from './components/About'
import ARLevel from './containers/ARLevel'
import GradeLevel from './containers/GradeLevel'
import Genre from './containers/Genre'
import SignedPDFs from './components/SignedPDFs'
import Banner from './components/Banner'
import NavBar from './containers/NavBar'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      opts: {
        height: '100%',
        width: '100%',
      }
    }
  }

// setting tag filters for routes
getARLevels() {
  let tags = this.state.videos.map(v => v.snippet.tags.filter(t => t.match(/^ar/i))).flat()
  tags = tags.map(s => s.slice(3)).sort()
  return [...new Set(tags)]
}

getGradeLevels() {
  let tags = this.state.videos.map(v => v.snippet.tags.filter(t => t.match(/^grade/i))).flat()
  tags = tags.map(s => s.slice(6)).sort()
  return [...new Set(tags)]
}


/*
Move the following to Redux note to self...add redux...
*/
/// fetch requests

  fetchVideoIds() {
    let vId = []
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&type=video&maxResults=50`)
      .then(resp => resp.json())
      .then((json) => {
        vId = json.items.map(v => v.id.videoId).join(',')
        this.fetchVideoTags(vId)
      })
    }

    fetchVideoTags(videoIdString) {
      fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIdString}&key=${process.env.REACT_APP_KEY}`)
        .then(resp => resp.json())
        .then((json) => {
          this.setState({
            videos: json.items
          })
        })
      }

      componentDidMount() {
        this.fetchVideoIds()
      }

      render() {

        return (
          <div className="App">

          <Banner />
          <hr border="50px" color='black'/>
          <br />
          <div className='router'>
          <Router>
          <NavBar />
          <div className='routes'>
          <Switch>
          <Route exact path="/" render={() => <Main videos={this.state.videos} />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/pdf" render={() => <SignedPDFs />} />
          <Route path="/arlevel" render={() => <ARLevel videos={this.state.videos}  tags={this.getARLevels()} />} />
          <Route path="/gradelevel" render={() => <GradeLevel videos={this.state.videos}  tags={this.getGradeLevels()} />} />
          <Route path="/genre" render={() => <Genre videos={this.state.videos}   />} />
          </Switch>
          </div>
          </ Router>
          </div>
          </ div>
        )}
      }

      export default App;
