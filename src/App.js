import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Main from './containers/Main';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import PageNotFound from './pages/PageNotFound';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} errorElement={<PageNotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
