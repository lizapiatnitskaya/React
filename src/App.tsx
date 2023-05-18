import React from 'react';
import './App.css';
import { Star } from './components/Star';

function App() {
  return (
    <div className="App">
     Hello, samurai! Let's go!
     <Star title={"Hello,world!"} collapsed={false}/>
     <Star title={"Hello!"} collapsed={true}/>
    </div> 
  );
}

export default App;
