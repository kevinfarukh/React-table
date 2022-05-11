import './App.css';
import React from 'react';
import {Products} from './components/Table';
import Header from './components/Header';
import Footer from './components/Footer';
import Bono from './components/Bono';



function App() {
  return (
    <div className="App">
        <Header /> 
        <Products/>
        <Bono />
        <Footer />     
    </div>
  );
}

export default App;
