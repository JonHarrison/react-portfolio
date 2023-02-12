import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Main from './containers/Main';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Project from './pages/Project';
import PageNotFound from './pages/PageNotFound';

import projectsData from './data/projects.json';
import contactsData from './data/contacts.json';

const App = () => {

  // define app state
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);

  // set projects state
  useEffect(() => {
    setProjects(projectsData);
    setContacts(contactsData);
  }, []) // [] never changes, so this will only run once

  const basename = document.querySelector('base')?.getAttribute('href') ?? '/';

  return (
    <Router basename={basename}>
      <div className="App flexbox-container">
        <Header className="flexbox-item header" />
        {/* <div class="flexbox-item fill-area content flexbox-item-grow"> */}
        {/* <div class="fill-area-content flexbox-item-grow"> */}
        <Main className="flexbox-item main">
          <Routes>
            <Route exact path="/" element={<Home />} errorElement={<PageNotFound />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio projects={projects} />} />
            <Route path="/project/:id" element={<Project projects={projects} />} />
            <Route path={"*"} element={<Navigate to={"/404"} />}/>
            <Route path="404" element={<PageNotFound />} />
          </Routes>
        </Main>
        {/* </div> */}
        {/* </div> */}
        <Footer className="flexbox-item footer" contacts={contacts} />
      </div>
    </Router>
  );
}

export default App;
