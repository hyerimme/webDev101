import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigator from './components/Navigator/Navigator';
import Second_nav from './components/Second_nav/Second_nav';
import Images from './components/Images/Images';
import Information from './components/Information/Information';
import SonanBody from './components/SonanBody/SonanBody';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Make from './components/Make/Make';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />
      <Second_nav />
        <Routes>
          <Route path='/' element={<Images />} />
          <Route path='/sonan' element={<SonanBody />} />
          <Route path='/make' element={<Make />} />
        </Routes>
      <Information />
    </div>

  );
}


export default App;