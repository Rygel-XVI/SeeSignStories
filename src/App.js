import React, { Component } from 'react';
import './App.css';

import routes from './routes'
import Main from './containers/Main'
import Banner from './components/Banner'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'



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

  fetchVideoIds() {
    let vId = []
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&type=video`)
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

      // create back button that only shows up if route !== '/'

      render() {

        return (
          <div className="App">

          <Banner />
          <hr border="50px" color='black'/>
          <br />
          <Router>
          <Switch id='routes'>
          <Route exact path="/" render={() => <Main videos={this.state.videos} />} />
          </Switch>
          </ Router>
          </ div>
        )}
      }

      export default App;
