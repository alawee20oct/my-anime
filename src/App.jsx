import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Home from './pages/Home';
import Setting from './pages/Setting';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/setting" element={<Setting/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;