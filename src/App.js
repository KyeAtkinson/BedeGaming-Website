import React from 'react';
import Navigation from './Components/Navigation';
import Body from './Components/Body';
import Home from './Components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Body />
      <h1>Hello michael. and dog.</h1>
      <Home />
    </div>
  );
}

export default App;
