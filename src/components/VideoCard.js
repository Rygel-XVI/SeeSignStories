import React, { Component } from 'react'
import VideoPlayer from './VideoPlayer'

class VideoCard extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      renderVideo: false,
    })

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState ({
      renderVideo: !this.state.renderVideo
    })
  }

  playVideo() {
    return <VideoPlayer id={this.props.id} />
  }

  render() {
    return (
    <div>

    <div className="video-title">
    <h1>{this.props.title}</h1>
    </div>

    <div className="video-card">
    {this.playVideo()}
    </div>

    </div>
  )
  }

}

export default VideoCard
