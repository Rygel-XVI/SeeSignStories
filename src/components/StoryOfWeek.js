import React, { Component } from 'react';
import VideoCard from './VideoCard';

class StoryOfWeek extends Component {
  constructor(props) {
    super(props)

    this.onPlayVideo = this.onPlayVideo.bind(this)
  }

  onPlayVideo(event) {
    //change video rendering so it only pull the thumbnail
    //on click it should load and autoplay in fullscreen mode
    debugger;
  }

  render() {

    return (
      <div>
      <h1>Story of the Week</h1>
      <div className="sow">
      <VideoCard key={this.props.sow.id} id={this.props.sow.id} tags={this.props.sow.snippet.tags}  title={this.props.sow.snippet.title} thumbnails={this.props.sow.snippet.thumbnails}/>
      </ div>
      </ div>
    )
  }
}

export default StoryOfWeek;
