/* eslint-disable react/react-in-jsx-scope */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import FooterComponent from './components/Footer';
import Category from './pages/Category';
import ScrollToTop from './components/Scroll';
import Checkout from './pages/Checkout';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
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
