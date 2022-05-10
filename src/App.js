import './App.css';
import React from 'react';
import {Products} from './components/Table';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Hello</h1>
      <h2>Tabla</h2> 
      <Products/>
    </div>
  );
}

export default App;
