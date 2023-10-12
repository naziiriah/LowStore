import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Second from './pages/Second';
import Header from './components/Header';
import React from 'react';
import Profile from './pages/Profile';
import FooterComponent from './components/Footer';
import Category from './pages/Category';
import ScrollToTop from './components/Scroll';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sec' element={<Second />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/category/:category' element={<Category />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      <FooterComponent />
    </>
  );
}

export default App;
