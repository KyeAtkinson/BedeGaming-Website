import React from 'react';
import Navigation from './Components/Navigation'
import Body from './Components/Body'
import Wave from './Components/Wave'
import Product from './Components/Product'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Body />
      <Wave />
      <Product />
    </div>
  );
}

export default App;
