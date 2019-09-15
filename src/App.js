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



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      channels: [],
      videos: [],
      opts: {
        height: '100%',
        width: '100%',
      }
    }
  }

  // setting tag filters for routes
  getARLevels() {
    let tags = this.state.videos.map(v => v.tags.ar).flat().sort()
    return [...new Set(tags)]
  }

  getGradeLevels() {
    let tags = this.state.videos.map(v => v.tags.grade).flat().sort()
    return [...new Set(tags)]
  }

  renderNav() {
    return window.innerWidth > 740 ? <NavBar /> : <DockedNav />
  }


  /*
  Move the following to Redux note to self...add redux...
  */
  /// fetch requests

  getChannels = async () => {
    const resp = await fetch(`http://localhost:3000/channel`, {
      crossDomain:true,
      headers: {
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
      }}
    )
    const body = await resp.json()

    if (resp.status !== 200) {
      throw console.error(body.message)
    }
    // console.log(body)

    this.setState({
      channels: body.channels
    })

    return
  }

  getVideos = async () => {
    const resp = await fetch(`http://localhost:3000/video`, {
      crossDomain:true,
      headers: {
        "access-control-allow-origin" : "*",
        "Content-type": "application/json; charset=UTF-8"
      }}
    )
    const body = await resp.json()

    if (resp.status !== 200) {
      throw console.error(body.message)
    }
    // console.log(body)

    this.setState({
      videos: body.videos
    })

    return
  }



  fetchVideoIds() {
    let vId = []
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&type=video&maxResults=50`)
      .then(resp => resp.json())
      .then((json) => {
        this.setState ({
          etag: json.etag
        })
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
        this.getChannels()
        this.getVideos()
        // this.fetchVideoIds()
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
            tags={this.getARLevels()}
            />} />
            <Route path="/gradelevel" render={() => <GradeLevel
              videos={this.state.videos}
              title="Grade Level"
              tags={this.getGradeLevels()}
              />} />
              <Route path="/genre" render={() => <Genre
                videos={this.state.videos}
                text="genre"
                />} />
                </Switch>
                </div>
                </ Router>
                </div>
                </ div>
              )}
            }

            export default App;
