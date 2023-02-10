import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './pages/Nav.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import PageNotFound from './pages/PageNotFound.js';
import Footer from './pages/Footer.js';

const App = () => {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} errorElement={<PageNotFound />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
