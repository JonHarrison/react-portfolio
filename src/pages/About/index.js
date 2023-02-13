import React from 'react'
import { Link } from 'react-router-dom';

import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";

import './style.css';

import CV from '../../assets/files/CV.pdf';
import Headshot from '../../assets/images/1043077.png';

const About = () => {
  return (
    <div className="about about-container container">
      <h1>About me</h1>
      <div className="headshot">
        <img src={Headshot} alt="Headshot" />
      </div>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam. Integer gravida dui
        mauris, ut interdum nunc egestas sed. Aenean sed mollis diam. Nunc aliquet risus ac finibus
        porta. Nam quis arcu non lectus tincidunt fermentum. Suspendisse aliquet orci porta quam
        semper imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus in. Sed
        rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      <div className="cta">
        <a href={CV} download className="btn">Download resume</a>
        <Link to="/contact" role="button" className="btn btn-primary btn-link">
          Let's talk
        </Link>
      </div>
    </div>
  )
}

export default About;