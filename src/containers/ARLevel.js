import React, { Component } from 'react';
import VideoCard from '../components/VideoCard';


class ARLevel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: []
    }
  }

  render() {

    return (
      <div className="ar-level">
      AR Level Component
      </div>
    )}
}

export default ARLevel;
