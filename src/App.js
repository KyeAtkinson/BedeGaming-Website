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
      <Home />
    </div>
  );
}

export default App;
