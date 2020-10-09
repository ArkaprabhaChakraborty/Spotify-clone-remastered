import React from 'react';
import Nav from './components/Nav'
import Main from './components/Main'
import './App.scss';

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav/>
        <Main/>
      </div>
    <div className="musicControls">MUSIC</div>
    </div>
  );
}

export default App;
