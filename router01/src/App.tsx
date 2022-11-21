import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className='container'>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/about' element={<About />} /> */}
          {/* <Route path='/members' element={<Members />} /> */}
          {/* <Route path='/songs' element={<SongList />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
