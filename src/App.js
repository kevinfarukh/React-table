import './App.css';
import React from 'react';
import {Products} from './components/Table';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Header /> 
      <Products/>
      <Footer />
    </div>
  );
}

export default App;
