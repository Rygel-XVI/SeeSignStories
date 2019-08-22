import React, { Component } from 'react';
import VideoCard from './VideoCard';

class StoryOfWeek extends Component {


  displaySOW() {
    const sow = this.props.sow

    return sow === "No Story of the Week" ? sow : <VideoCard key={sow.id} id={sow.id} tags={sow.snippet.tags}  title={sow.snippet.title} />
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
