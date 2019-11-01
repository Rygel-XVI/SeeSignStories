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
factor functions out into another file
*/
  // tagMatches(tag, arLevel) {
  //   if (tag.match(/^ar/i) && this.inRange(tag, arLevel)) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  //
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

    let arLevel = event.target.textContent.split(/[a-zA-Z]+|\s+|-/)

    this.props.videos.forEach((video) => {
      if (video.ar_lvl_low >= arLevel[0] && video.ar_lvl_high <= arLevel[1]){
        filteredVideos.push(video)
      }})
      // if (video.filter((tag) => this.tagMatches(tag, arLevel)).length > 0) {
      //   filteredVideos.push(video)
      // }})
    //
    // this.props.videos.forEach((video) => {
    //   if (video.snippet.tags.filter((tag) => this.tagMatches(tag, arLevel)).length > 0) {
    //     filteredVideos.push(video)
    //   }})

      this.setState({ filteredVideos: filteredVideos })
    }

    renderButtons() {
      return this.props.arLevels.map(level => {
        return <Button klass='link-button black' text={level} key={level} handleClick={this.handleClick} />
      })
    }

    renderVideos() {
      return this.state.filteredVideos.map(v => <VideoCard key={v.id} id={v.embed_id} title={v.title} />)
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
