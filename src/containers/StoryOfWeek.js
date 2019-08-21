import React, { Component } from 'react';
import ButtonNav from './ButtonNav'
import VideoCard from '../components/VideoCard';


class StoryOfWeek extends Component {

  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      storyOfWeek: 'No Story of the Week',
      opts: {
        height: '100%',
        width: '100%',
      }
    }
  }
}

export default StoryOfWeek;
