import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Main from './containers/Main';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import PageNotFound from './pages/PageNotFound';

import projectsData from './data/projects.json';

const App = () => {

    // define app state
    const [projects, setProjects] = useState([]);

    // set projects state
    useEffect(() => {
      setProjects(projectsData);
    }, []) // [] never changes, so this will only run once
  
  return (
    <div className="App">
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={<Home />} errorElement={<PageNotFound />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/portfolio" element={<Portfolio projects={projects} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Main>
      <Footer />
    </div>
  );
}

export default App;
