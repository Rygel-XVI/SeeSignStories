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
    // let sow = this.props.videos.find(v => v.snippet.tags.includes("Story of the Week"))
    // return sow !== undefined ? <StoryOfWeek sow={sow} /> : "No Story of the Week"
  }
  
  displayTeachermMessage() {
    let message = "Welcome to the website. Through this website you can find storybooks that are spoken aloud and signed. Please read along. This website is still in early stage development if it is unaccessible you can find the videos on Youtube."
    return 
  }

  render() {

    return (
      <div className="main videos">
      <h2>Welcome to the website. Through this website you can find storybooks that are spoken aloud and signed. Please read along. This website is still in early stage development if it is unaccessible you can find the videos on Youtube.</h2>
      </div>
    )}
}

export default Main;
