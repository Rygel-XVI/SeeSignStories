import React, { Component } from 'react';
import ButtonNav from './ButtonNav'
import VideoCard from '../components/VideoCard';


class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      sow: "No Story of the Week"
    }
  }

  // displayVideo() {
  //   return this.state.videos.map(v => <VideoCard key={v.id} id={v.id} tags={v.snippet.tags}  title={v.snippet.title} />
  // )}

  displaySOW() {
    let sow = this.props.videos.find(v => v.snippet.tags.includes("Folk Tale")) || "No Story of the Week"

    if (sow === "No Story of the Week") {
      return sow
    } else {
      return <VideoCard key={sow.id} id={sow.id} tags={sow.snippet.tags}  title={sow.snippet.title} opts={this.state.opts}/>
    }
  }

  render() {

    return (
      <div className="main videos">
      <h1>Story of the Week</h1>
      <br />
      <div className="sow">
        {this.displaySOW()}
        </ div>
        <ButtonNav videos={this.state.videos} />
      </div>
    )}
}

export default Main;
