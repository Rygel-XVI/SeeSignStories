import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom'

import dinosaursBeforeDark from '../DinosaursBeforeDark.jpg'
import knightAtDawn from '../KnightAtDawn.jpg'

import ChapterBookVideos from './ChapterBookVideos'


class ChapterBooks extends Component {

  render() {

    return (
      <div className='chapterbooks'>
        <Link className='spacer' key='dinosaursBeforeDark' to="/chapterbooks/dinosaursbeforedark">
          <img className="video" src={dinosaursBeforeDark} alt="Cover of Magic Treehouse: Dinosaurs Before Dark"/>
        </Link>
        <Link className='spacer' key='knightAtDawn' to="/videos">
          <img className="video" src={knightAtDawn} alt="Cover of Magic Treehouse: The Knight At Dawn"/>
        </Link>
        <Link className='spacer' key='knightAtDawn2' to="/videos">
          <img className="video" src={knightAtDawn} alt="Cover of Magic Treehouse: The Knight At Dawn"/>
        </Link>
      </div>
      
    )}
}

export default ChapterBooks