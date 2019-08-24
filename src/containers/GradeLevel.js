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


/*
factor functions out into another file
*/
  tagMatches(tag, arLevel) {
    if (tag.match(/^grade/i) && this.inRange(tag, arLevel)) {
      return true
    } else {
      return false
    }
  }

  // inRange(tag, arLevel) {
  //   let arRange = tag.split(/[a-zA-Z]+|\s+|-/).slice(2)
  //   let arLow = arRange[0]
  //   let arHi = arRange[1]
  //
  //   return (arLow >= arLevel[0] && arHi <= arLevel[1]) ? true : false
  // }

///////

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
      return this.state.filteredVideos.map(v => <VideoCard key={v.id} id={v.id} tags={v.snippet.tags}  title={v.snippet.title} />)
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
