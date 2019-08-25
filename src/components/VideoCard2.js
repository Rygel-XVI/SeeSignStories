import React, { Component } from 'react'
import YouTube from 'react-youtube';
import Test from './Test'

class VideoCard extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      renderVideo: false,
      opts: {
        playerVars: {
          autoplay: 1,
        }
      }
    })
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState ({
      renderVideo: !this.state.renderVideo
    })
  }

  playVideo() {
    return <Test id={this.props.id} />
  }

  renderImage() {
    return <img src={this.getThumbnail()} onClick={this.handleClick}/>
  }

  getThumbnail() {
    let thumbnails = this.props.thumbnails
    let res = this.props.thumbnails.default.url
    if (thumbnails.maxres) {
      res = this.props.thumbnails.maxres.url
    } else if (thumbnails.standard) {
      res = this.props.thumbnails.standard.url
    } else if (thumbnails.high) {
      res = this.props.thumbnails.high.url
    } else if (thumbnails.medium) {
      res = this.props.thumbnails.medium.url
    }

    return res
  }

  renderContent() {
    return this.state.renderVideo ? this.playVideo() : this.renderImage()
  }

  render() {
    return (
    <div>

    <div className="video-title">
    <h1>{this.props.title}</h1>
    </div>

    <div className="video-card">
    {this.renderContent()}
    </div>

    </div>
  )
}
}

export default VideoCard
