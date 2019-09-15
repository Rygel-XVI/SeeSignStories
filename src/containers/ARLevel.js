import React, { Component } from 'react';
import VideoCard from '../components/VideoCard';
import Button from '../components/Button'


class ARLevel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: [],
      filteredVideos: []
    }
    this.handleClick = this.handleClick.bind(this)
  }


/*
factor functions out into another file or combine with other filtered files since the code is the same
*/
  inRange(low, hi, target) {
    if (target >= low && target <= hi) {
      return true
    } else {
      return false
    }
  }

  handleClick(event) {
    let filteredVideos = []
    let target = Number(event.target.textContent)

    this.props.videos.forEach((video) => {
      if (video.tags.ar.length > 0 && this.inRange(video.tags.ar[0], video.tags.ar[1], target)) {
        filteredVideos.push(video)
      }})

      this.setState({ filteredVideos: filteredVideos })
    }

    renderButtons() {
      return this.props.tags.map(level => {
        return <Button klass='link-button black' text={level} key={level} handleClick={this.handleClick} />
      })
    }

    renderVideos() {
      return this.state.filteredVideos.map(v => <VideoCard key={v.id} id={v.videoId} tags={v.tags} title={v.title} />)
    }

    render() {

      return (
        <div className="video-filter-container">
        <h1>Accelerated Reader Level</h1>
        <div className="buttons-div">
        {this.renderButtons()}
        </div>
        <div className="videos">
        {this.renderVideos()}
        </div>
        </div>
      )}
    }

    export default ARLevel;
