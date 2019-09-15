import React, { Component } from 'react';
import VideoCard from './VideoCard';

class StoryOfWeek extends Component {

  render() {

    return (
      <div>
      <div className="sow-text">
      Story of the Week
      </div>
      <div className="sow">
      <VideoCard key={this.props.sow.id} id={this.props.sow.videoId} tags={this.props.sow.tags}  title={this.props.sow.title} />
      </ div>
      </ div>
    )
  }
}

export default StoryOfWeek;
