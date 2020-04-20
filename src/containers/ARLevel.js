import React, { Component } from 'react';
import VideoCard from '../components/VideoCard';
import Button from '../components/Button'


class ARLevel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tags: [],
      filteredVideos: []
    }
    this.handleClick = this.handleClick.bind(this)
  }


  filterVideosByARLevel(arLevel) {
    return this.props.videos.filter(video => video.ar_lvl_low !== null && video.ar_lvl_low <= arLevel && video.ar_lvl_high >= arLevel).map(v => v)
  }

  handleClick(event) {
    let arLevel = event.target.textContent.split(/[a-zA-Z]+|\s+|-/)[0]
    let filteredVideos = event.target.textContent === "All" ? this.props.videos : this.filterVideosByARLevel(arLevel)

    this.setState({ filteredVideos: filteredVideos })
  }
    

    renderButtons() {
      return this.props.tags.map(level => {
        return <Button klass='link-button black' text={level} key={level} handleClick={this.handleClick} />
      })
    }

    renderVideos() {
      return this.state.filteredVideos.map(v => <VideoCard key={v.id} id={v.embed_id}   title={v.title} />)
    }
    
    renderAllButton() {
      return <Button klass='link-button black' text="All" key="All" handleClick={this.handleClick} />
    }

    render() {

      return (
        <div className="video-filter-container">
        <h1>Accelerated Reader Level</h1>
          <div className="buttons-div">
          {this.renderAllButton()}
          {this.renderButtons()}
          </div>
          <div className="videos">
          {this.renderVideos()}
          </div>
        </div>
      )}
    }

    export default ARLevel;
