import React from 'react';
import './App.css';

import routes from './routes'
import Main from './containers/Main'
import Banner from './components/Banner'


function App() {
  return (
    <div className="App">
      <Banner />
      <hr border="50px" color='black'/>
      <br />
      {routes}
    </div>
  );
}

export default App;
