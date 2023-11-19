import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import OurCoffee from './pages/OurCoffee';
import ForYourPleasure from './components/ForYourPleasure';

function App() {
  const products = [
    {
      name: 'Solimo Coffee Beans',
      weight: '2 kg',
      price: '10.73$',
      img: 'img/coffee/solimo.png',
    },
    {
      name: 'Presto Coffee Beans',
      weight: '1 kg',
      price: '15.99$',
      img: 'img/coffee/presto.png',
    },
    {
      name: 'AROMISTICO Coffee',
      weight: '1 kg',
      price: '6.99$',
      img: 'img/coffee/aromistico.png',
    },
  ];

  return (
    <div className="App">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home products={products} />} />
          <Route path="/ourcoffee/*" element={<OurCoffee />} />
          <Route path="/foryourpleasure/*" element={<ForYourPleasure />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
