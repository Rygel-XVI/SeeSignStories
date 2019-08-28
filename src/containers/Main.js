import React, { Component } from 'react';
import ButtonNav from './ButtonNav'
import NavBar from './NavBar'
import VideoCard from '../components/VideoCard';
import StoryOfWeek from '../components/StoryOfWeek'


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sow: "No Story of the Week"
    }
  }


  displaySOW() {
    let sow = this.props.videos.find(v => v.snippet.tags.includes("Story of the Week"))
    return sow !== undefined ? <StoryOfWeek sow={sow} /> : "No Story of the Week"
  }

  render() {

    return (
      <div className="main videos">
        {this.displaySOW()}
      </div>
    )}
}

export default Main;
