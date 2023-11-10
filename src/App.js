import { useState } from 'react';
import Home from './pages/Home';
import OurCoffee from './pages/OurCoffee';

function App() {
  console.log('render');
  return (
    <div className="App">
      <div className="wrapper">
        <OurCoffee />
      </div>
    </div>
  );
}

export default App;
