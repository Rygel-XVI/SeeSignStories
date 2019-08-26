import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'

import YouTube from 'react-youtube'
import screenfull from 'screenfull'
// import ReactPlayer from 'react-player'
import YouTubePlayer from 'react-player/lib/players/YouTube'


class Test extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      opts: {
        width: '100%',
        height: '100%',
        youtube: {
          playerVars: {
            autoplay: 0,
            cc_load_policy: 1,
            modestbranding: 1,
            fs: 0
          }
        }
      }
    })
    this.goFullScreen = this.goFullScreen.bind(this)
    this.stopFullScreen = this.stopFullScreen.bind(this)
  }


  goFullScreen = () => {
    screenfull.request(findDOMNode(this.refs.player))
  }

  stopFullScreen = () => {
    screenfull.exit(findDOMNode(this.refs.player))
  }

  render() {
    return (
      <div>
      <YouTubePlayer
      ref='player'
      url={`https://www.youtube.com/embed/${this.props.id}`}
        key={this.props.id}
        onPlay={this.goFullScreen}
        onPause={this.stopFullScreen}
        playing={true}
        controls
        />

        </div>
      )
    }


  }

  export default Test;
