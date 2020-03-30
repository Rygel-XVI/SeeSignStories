import React, { Component } from 'react';
import dinosaursBeforeDark from '../DinosaursBeforeDark.jpg'


class ChapterBooks extends Component {

  render() {

    return (
      <div className='chapterbooks'>
      <h1>In progress...</h1>
      <img className="book-cover-image" src={dinosaursBeforeDark} alt="Cover of Magic Treehouse: Dinosaurs Before Dark"/>
      </div>
    )}
}

export default ChapterBooks;
