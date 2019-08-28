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
      <VideoCard key={this.props.sow.id} id={this.props.sow.id} tags={this.props.sow.snippet.tags}  title={this.props.sow.snippet.title} thumbnails={this.props.sow.snippet.thumbnails}/>
      </ div>
      </ div>
    )
  }
}

export default StoryOfWeek;
