import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navigator from './components/Navigator/Navigator';
import Second_nav from './components/Second_nav/Second_nav';
import Images from './components/Images/Images';
import Information from './components/Information/Information';
import SonanBody from './components/SonanBody/SonanBody';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigator />
      <Second_nav />
        <Routes>
          <Route path='/Images' element={<Images />} />
        </Routes>
      <Information />
      <SonanBody />
    </div>

  );
}


export default App;