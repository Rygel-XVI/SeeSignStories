import React, { Component } from 'react';
import VideoCard from '../components/VideoCard';


class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      opts: {
        width: "100%",
        height: '100%'
      }
    }
  }

  displayVideo() {
    return this.state.videos.map(v => <VideoCard key={v.id} id={v.id} tags={v.snippet.tags}  title={v.snippet.title} opts={this.state.opts}/>
  )}

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
        this.setState({ videos: json.items})
    })
  }

  componentDidMount() {
    this.fetchVideoIds()
  }

  render() {

    return (
      <div className="main videos">
        {this.displayVideo()}
      </div>
    )}
}

export default Main;
