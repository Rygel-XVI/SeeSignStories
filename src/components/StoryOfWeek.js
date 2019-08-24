import React, { Component } from 'react';
import VideoCard from './VideoCard';

class StoryOfWeek extends Component {
  constructor(props) {
    super(props)

    this.onPlayVideo = this.onPlayVideo.bind(this)
  }

  onPlayVideo(event) {
    debugger;
  }

  displaySOW() {
    const sow = this.props.sow

    return sow === "No Story of the Week" ? sow : <VideoCard key={sow.id} id={sow.id} tags={sow.snippet.tags}  title={sow.snippet.title} onPlayVideo={this.onPlayVideo}/>
  }

  render() {

    return (
      <div className="sow">
      {this.displaySOW()}
      </ div>
    )
  }
}

export default StoryOfWeek;
