import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Second from './pages/Second';
import Header from './components/Header';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sec' element={<Second />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
