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

    this.props.videos.forEach((video) => {
      if (video.snippet.tags.filter((tag) => tag.match(/^grade/i))) {
        filteredVideos.push(video)
      }})

      this.setState({ filteredVideos: filteredVideos })
    }

    renderButtons() {
      return this.props.tags.map(level => {
        return <Button klass='button black' text={level} handleClick={this.handleClick} />
      })
    }

    renderVideos() {
      return this.state.filteredVideos.map(v => <VideoCard key={v.id} id={v.id} tags={v.snippet.tags}  title={v.snippet.title} thumbnails={v.snippet.thumbnails}/>)
    }

    render() {

      return (
        <div className="grade-level">
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
