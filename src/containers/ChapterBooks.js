import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'

import dinosaursBeforeDark from '../DinosaursBeforeDark.jpg'
import knightAtDawn from '../KnightAtDawn.jpg'
import waysideSchoolFallingDown from '../WaysideSchoolFallingDown.jpg'
import VideoCard from '../components/VideoCard'


class ChapterBooks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredVideos: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    let filteredVideos = []
    let book = event.target.name
    this.props.videos.forEach((video) => {
      if (video.title.includes(book)) {
        filteredVideos.push(video)
      }
    })
    
      this.setState({ filteredVideos: filteredVideos })
    }

// render videos based on series clicked
// add ordering by chapter
  renderVideos() {
    return this.state.filteredVideos.map(v => <VideoCard key={v.id} id={v.embed_id} title={v.title} />)
  }

  render() {

    return (
      <div className='chapterbooks'>
        <div className='buttons-div'>
          <div className='spacer'>
            <img className="video" onClick={this.handleClick} name='Dinosaurs Before Dark' src={dinosaursBeforeDark} alt="Cover of Magic Treehouse: Dinosaurs Before Dark"/>
          </div>
          <div className='spacer'>
            <img className="video" onClick={this.handleClick} name='Knight At Dawn' src={knightAtDawn} alt="Cover of Magic Treehouse: The Knight At Dawn"/>
          </div>
          <div className='spacer'>
            <img className="video" onClick={this.handleClick} name='Wayside School is Falling Down' src={waysideSchoolFallingDown} alt="Cover of Wayside School is Falling Down"/>
          </div>
        </div>
        
        <div className="videos">
        {this.renderVideos()}
        </div>
      </div>
      
    )}
}

export default ChapterBooks