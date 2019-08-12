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

    // const opts = {
    //   width: 100%,
    //   height: 100%
    // }

    return this.state.videos.map(v => <VideoCard id={v.id} videoId={v.id.videoId} key={v.id.videoId} opts={this.state.opts}/>
  )}

  componentDidMount() {
      // all of the user stats
      // fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCzm23K3jWedsp9SQejnOrpA&key=${process.env.REACT_APP_KEY}`)

      fetch(`https://www.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_KEY}&channelId=${process.env.REACT_APP_CHANNEL_ID}&part=snippet,id&type=video`)
      .then(resp => resp.json())
      .then((json) => {
      this.setState({ videos: json.items })
    })
    }

  render() {

    return (
      <div className="main videos">
        {this.displayVideo()}
      </div>
    )}
}

export default Main;
