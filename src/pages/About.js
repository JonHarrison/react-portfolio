import React from 'react'
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
        <h1>This is the about page</h1>
        <Link to="/contact">Lets talk</Link>
    </div>
  )
}

export default About;