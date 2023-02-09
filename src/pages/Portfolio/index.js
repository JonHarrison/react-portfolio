import React, { useState } from 'react';

import ProjectCards from '../../components/ProjectCard';
import Wrapper from '../../containers/Wrapper';

import PortfolioCards from './cards.js'
import CarouselCards from './carousel.js'

import './style.css';

const Portfolio = ({ projects }) => {

    return (
        // <PortfolioCards projects={projects} />
        <CarouselCards projects={projects} />
    );

};

// const XPortfolio = (props) => {
//     return (
//         // <HelmetProvider>
//         <Container className="About-header">
//             {/* <Helmet> */}
//             {/* <meta charSet="utf-8" />
//             <title> Portfolio | {meta.title} </title>{" "}
//             <meta name="description" content={meta.description} /> */}
//             {/* </Helmet> */}
//             <Row className="mb-5 mt-3 pt-md-3">
//                 <Col lg="8">
//                     <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
//                     <hr className="t_border my-4 ml-0 text-left" />
//                 </Col>
//             </Row>
//             <div className="mb-5 po_items_ho">
//                 {projects.map((data, i) => {
//                     return (
//                         <div key={i} className="po_item">
//                             <img src={data.img} alt="" />
//                             <div className="content">
//                                 <p>{data.description}</p>
//                                 <a href={data.link}>view project</a>
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </Container>
//         //   </HelmetProvider>
//     );
// };

export default Portfolio;