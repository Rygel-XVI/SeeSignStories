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

  tagMatches(tag, arLevel) {
    if (tag.match(/^grade/i) && this.inRange(tag, arLevel)) {
      return true
    } else {
      return false
    }
  }

  handleClick(event) {
    let filteredVideos = []
    let gradeTarget = event.target.textContent

    this.props.videos.forEach((video) => {
      if (!!video.grade && video.grade.slice(6) == gradeTarget) {
        filteredVideos.push(video)
      }
    })
    this.setState({ filteredVideos: filteredVideos })
    }

    renderButtons() {
      return this.props.tags.map(level => {
        return <Button klass='link-button black' text={level} handleClick={this.handleClick} key="level" />
      })
    }

    renderVideos() {
      return this.state.filteredVideos.map(v => <VideoCard key={v.id} id={v.embed_id} title={v.title}/>)
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
