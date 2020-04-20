import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import Main from './containers/Main'
import About from './components/About'
import ARLevel from './containers/ARLevel'
import GradeLevel from './containers/GradeLevel'
import Genre from './containers/Genre'
import ChapterBooks from './containers/ChapterBooks'
import SignedPDFs from './components/SignedPDFs'
import Banner from './components/Banner'
import NavBar from './containers/NavBar'
import DockedNav from './containers/DockedNav'
import ChapterBookVideos from './containers/ChapterBookVideos'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      etag: '',
      videos: [],
      opts: {
        height: '100%',
        width: '100%',
      }
    }
  }

// setting tag filters for routes
getARLevels() {
  let ar_levels = this.state.videos.filter(video => !!video.ar_lvl_low).map(video => [video.ar_lvl_low, video.ar_lvl_high] ).flat().sort()
  return [...new Set(ar_levels)]
}

getGradeLevels() {
  let grades = this.state.videos.filter(video => !!video.grade).map(video => video.grade.slice(6)).flat().sort()
  return [...new Set(grades)]
}

renderNav() {
  return window.innerWidth > 740 ? <NavBar /> : <DockedNav />
}

getChapterBooks() {
  return this.state.videos.filter( v => v.is_chapter_book )
}


/*
Move the following to Redux note to self...add redux...
*/
      
      fetchVideos() {
        // fetch(`https://seesignstories-rails-api.herokuapp.com/`)
        fetch(`http://localhost:3000`)

          .then(resp => resp.json())
          .then((json) => {
            this.setState({
              videos: json
            })
          })
      }

      componentDidMount() {
        this.fetchVideos()
      }

      render() {

        return (
          <div className="App">

          <Banner />
          <hr border="50px" color='black'/>
          <br />
          <div className='router'>
          <Router>
          {this.renderNav()}
          <div className='routes'>
          <Switch>
          <Route exact strict path="/" render={() => <Main videos={this.state.videos} />} />

          <Route exact strict path="about" render={() => <About />} />
          <Route exact strict path="/pdf" render={() => <SignedPDFs />} />
          <Route exact strict path="/arlevel" render={() => <ARLevel
            videos={this.state.videos}
            title="Accelerated Reader Level"
            tags={this.getARLevels()}
            />} />
          <Route exact strict path="/gradelevel" render={() => <GradeLevel
            videos={this.state.videos}
            title="Grade Level"
            tags={this.getGradeLevels()}
            />} />
          <Route exact strict path="/genre" render={() => <Genre
            videos={this.state.videos}
            text="genre"
            />} />
          <Route exact strict path="/chapterbooks" render={() => <ChapterBooks
            videos={this.getChapterBooks()}
            text="Chapter Books"
            />} />
          </Switch>
          </div>
          </ Router>
          </div>
          </ div>
        )}
      }

      export default App;
