import React from 'react';
import Navibar from "./components/Navigation/Navibar";
import Caser from './components/caser cipher/Caser';
import Playfaircipher from "./components/Playfair/Playfaircipher";
import Hillcipher from "./components/Hill/Hillcipher";
import Vigenerecipher from "./components/Vigenere/Vigenere";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className='container'>
        <Navibar />
          <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/home' element = {<Home/>} />
            <Route path='/Caser' element = {<Caser/>} />
            <Route path='/Playfaircipher' element = {<Playfaircipher/>} />
            <Route path='/Hillcipher' element = {<Hillcipher/>} />
            <Route path='/Vigenerecipher' element = {<Vigenerecipher/>} />

          </Routes>
      </div>
    </Router>
  );
}

export default App;
