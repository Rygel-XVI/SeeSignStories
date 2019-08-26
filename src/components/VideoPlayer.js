import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import screenfull from 'screenfull'
import ReactPlayer from 'react-player'



class VideoPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      opts: {
        youtube: {
          playerVars: {
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
      <div className="video-player">

        <ReactPlayer
        ref='player'
        url={`https://www.youtube.com/embed/${this.props.id}`}
          key={this.props.id}
          className='react-player'
          onPlay={this.goFullScreen}
          onPause={this.stopFullScreen}
          playing={true}
          config={this.state.opts}
          controls
          playsinline
        />

        </div>
      )
    }


  }

  export default VideoPlayer;
