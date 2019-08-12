import React from 'react';
import './App.css';

import Main from './containers/Main'
import Banner from './components/Banner'


function App() {
  return (
    <div className="App">
      <Banner />
      <Main />
    </div>
  );
}

export default App;
