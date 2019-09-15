import React, { Component } from 'react';
import VideoCard from '../components/VideoCard';
import Button from '../components/Button'



class GradeLevel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: [],
      filteredVideos: []
    }
    this.handleClick = this.handleClick.bind(this)
  }


///obvs abstract this out someday
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
      if (video.tags.grade.length === 2 && this.inRange(video.tags.grade[0], video.tags.grade[1], target)) {
        filteredVideos.push(video)
      } else if (video.tags.grade.length === 1 && video.tags.grade[0] === target) {
        filteredVideos.push(video)
      }})
      this.setState({ filteredVideos: filteredVideos })
    }

    renderButtons() {
      return this.props.tags.map(level => {
        return <Button klass='link-button black' text={level} handleClick={this.handleClick} key="level" />
      })
    }

    renderVideos() {
      return this.state.filteredVideos.map(v => <VideoCard key={v.id} id={v.videoId} tags={v.tags} title={v.title} />)
    }

    render() {

      return (
        <div className="video-filter-container">
        <h1>Grade Level</h1>
        <div className="buttons-div">
        {this.renderButtons()}
        </div>
        <div className="videos">
        {this.renderVideos()}
        </div>
        </div>
      )}

    }

    export default GradeLevel;
