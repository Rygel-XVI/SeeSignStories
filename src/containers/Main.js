import React, { Component } from 'react';
import ButtonNav from './ButtonNav'
import VideoCard from '../components/VideoCard';


class Main extends Component {

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

  displayVideo() {
    return this.state.videos.map(v => <VideoCard key={v.id} id={v.id} tags={v.snippet.tags}  title={v.snippet.title} />
  )}

  displaySOW() {
    let sow = this.state.storyOfWeek

    if (sow === "No Story of the Week") {
      return sow
    } else {
      return <VideoCard key={sow.id} id={sow.id} tags={sow.snippet.tags}  title={sow.snippet.title} opts={this.state.opts}/>
    }
  }

  fetchVideoIds() {
    let vId = []
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&type=video`)
      .then(resp => resp.json())
      .then((json) => {
        vId = json.items.map(v => v.id.videoId).join(',')
        this.fetchVideoTags(vId)
    })
  }

  fetchVideoTags(videoIdString) {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoIdString}&key=${process.env.REACT_APP_KEY}`)
      .then(resp => resp.json())
      .then((json) => {
        let storyOfWeek = json.items.find(v => v.snippet.tags.includes("Folk Tale")) || "No Story of the Week"
        this.setState({
          videos: json.items,
          storyOfWeek: storyOfWeek
        })
    })
  }

  componentDidMount() {
    this.fetchVideoIds()
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
