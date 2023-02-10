import React from "react";

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Hero from "../../components/Hero";

import './style.css';
import background from "../../assets/images/pexels-markus-spiske-1089440.jpg";

const Home = () => {
  return (
    <div className="home">
      {/* <h1>Home Page</h1> */}

      <Hero backgroundImage={background}>
        <h1>Jon Harrison</h1>
        <h2>Web Developer</h2>
        <div className="body mx-auto">
            <h5>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
            varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
            Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
          </h5>
        </div>
      </Hero>
      {/* <Row>
        <Col size="md-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, lobortis ut magna
            varius, blandit rhoncus sem. Morbi lacinia nisi ac dui fermentum, sed luctus urna tincidunt.
            Etiam ut feugiat ex. Cras non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna
            imperdiet ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras rutrum
            ligula in tincidunt commodo. Morbi sit amet mollis orci, in tristique ex. Donec nec ornare
            elit. Donec blandit est sed risus feugiat porttitor. Vestibulum molestie hendrerit massa non
            consequat. Vestibulum vitae lorem tortor. In elementum ultricies tempus. Interdum et
            malesuada fames ac ante ipsum primis in faucibus.
          </p>

        </Col>
      </Row> */}
    </div>
  );
}

export default Home;
