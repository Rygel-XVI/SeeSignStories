import React, { Component } from 'react';
import StoryOfWeek from '../components/StoryOfWeek'


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sow: "No Story of the Week"
    }
  }


  displaySOW() {
    let sow = this.props.videos.find(v => v.tags.sow)
    return !!sow ? <StoryOfWeek sow={sow} /> : "No Story of the Week"
  }

  render() {

    return (
      <div className="main videos">
        {this.displaySOW()}
      </div>
    )}
}

export default Main;
