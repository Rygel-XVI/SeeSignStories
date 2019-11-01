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

  //
  // getGradeLevels() {
  //   debugger;
  //   // let tags = this.state.videos.map(v => v.snippet.tags.filter(t => t.match(/^grade/i))).flat()
  //   // tags = tags.map(s => s.slice(6)).sort()
  //   // return [...new Set(tags)]
  // }

  renderNav() {
    return window.innerWidth > 740 ? <NavBar /> : <DockedNav />
  }


  /*
  Move the following to Redux note to self...add redux...
  */
  /// fetch requests

  // fetchVideoIds() {
  //   let vId = []
  //   fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_TEST_API}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&type=video&maxResults=50`)
  //     .then(resp => resp.json())
  //     .then((json) => {
  //       vId = json.items.map(v => v.id.videoId).join(',')
  //       this.fetchVideoTags(vId)
  //
  //     })
  //   }

  // fetchVideoTags(videoIdString) {
  //   fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIdString}&key=${process.env.REACT_APP_TEST_API}`)
  //     .then(resp => resp.json())
  //     .then((json) => {
  //       // debugger;
  //       this.setState({
  //         videos: json.items
  //       })
  //     })
  //   }


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
            </Switch>
            </div>
            </ Router>
            </div>
            </ div>
          )}
        }

        export default App;
