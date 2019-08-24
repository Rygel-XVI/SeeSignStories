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

  render() {

    return (
      <div>
      <h1>Story of the Week</h1>
      <div className="sow">
      <VideoCard key={this.props.sow.id} id={this.props.sow.id} tags={this.props.sow.snippet.tags}  title={this.props.sow.snippet.title} onPlayVideo={this.onPlayVideo}/>
      </ div>
      </ div>
    )
  }
}

export default StoryOfWeek;
