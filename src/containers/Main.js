import React, { Component } from 'react';
import StoryOfWeek from '../components/StoryOfWeek'


class Main extends Component {
  constructor(props) {
    super(props)
  }

  displaySOW() {
    debugger;
    let sow = this.props.videos.find(v => v.story_of_week)
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
