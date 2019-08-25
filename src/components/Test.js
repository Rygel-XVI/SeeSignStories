import React, { Component } from 'react'
import YouTube from 'react-youtube'
import Fullscreen from 'react-full-screen'

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      isFull: false,
      opts: {
        playerVars: {
          autoplay: 0
        }
      }
    })
    this.goFull = this.goFull.bind(this)
    this.stopFull = this.stopFull.bind(this)
  }


    goFull() {
      this.setState({ isFull: true });
    }

    stopFull() {
      this.setState({ isFull: false });
    }

  // make a separate route
  render() {
    return (
      <div>
      <Fullscreen
        enabled={this.state.isFull}
        onChange={isFull => this.setState({isFull})}
      />

      <YouTube
      videoId={this.props.id}
      key={this.props.id}
      opts={this.state.opts}
      containerClassName='youtube-video'
      onReady={this._onReady}
      onPlay={this.goFull}
      onPause={this.stopFull}
      />
      </div>
    )
  }


}

export default Test;
