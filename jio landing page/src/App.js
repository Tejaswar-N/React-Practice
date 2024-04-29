import React from 'react';
import './App.css';
import Header from './Components/NavBar.js';
import PartOne from './Components/PartOne.js';
import Recharge from './Components/Reacharge.js';
import Advertisement from './Components/Advertisement.js'
import Advertisement2 from './Components/Advertisement2.js'
import Footer from './Components/Footerbar.js';
function App() {
  return (
    <div>
    <Header/>
    <PartOne/>
    <Recharge/>
    <Advertisement/>
    <Advertisement2/>
    <Footer/>
    </div>
  );
}

export default App;
