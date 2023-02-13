import React from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

import "./style.css";

const Icons = {
    'FaPhone': FaPhone,
    'FaEnvelope': FaEnvelope,
    'BsLinkedin': BsLinkedin,
    'FaGithub': FaGithub
}

const Footer = ({ contacts }) => {
    return (
        // <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" fixed="bottom" id="footer">
        // <Container fluid>

        // <div className="fixed-bottom">
            <footer className="footer flexbox-item fixed-bottom" id="footer">

                {/* <div className="container"> */}

                    {/* <div as="h6" className="text-center">Connect with me</div> */}

                    {/* <!-- socials --> */}
                    <div className="footer-section">

                        <div className="contact-list flex justify-center text-center my-3">

                            {contacts && contacts.map((contact) => {
                                const { icon, link, text} = contact;
                                {/* console.log({contact}); */}
                                {/* <Icon /> */}
                                let Icon = Icons[icon];
                                {/* console.log({Icon}); */}
                                {/* return(<a className="footer-link" href={link}>
                                {/* dangerouslySetInnerHTML={{__html: {Component}}}
                                    <p className="contact-text px-3">{text}</p>
                                </a>); */}
                            })}

                            <a className="footer-link rounded" href="tel:+123456789">
                                <FaPhone />
                                <p className="contact-text px-3">Phone me</p>
                            </a>

                            <a className="footer-link" href="mailto:someone@me.com">
                                <FaEnvelope />
                                <p className="contact-text px-3">Email me</p>
                            </a>

                            <a className="footer-link" href="https://github.com/JonHarrison" target="_blank">
                                <FaGithub />
                                <p className="contact-text px-3">Find me on GitHub</p>
                            </a>

                            <a className="footer-link" href="https://uk.linkedin.com/" target="_blank">
                                <BsLinkedin />
                                <p className="contact-text px-3">Find me on LinkedIn</p>
                            </a>

                        </div>

                    </div>
                    {/* <!-- socials --> */}

                    {/* <!-- Copyright message --> */}
                    <div as="h6" className="text-center">Copyright &copy; Jon Harrison <script>document.write(new Date().getFullYear())</script>. All rights reserved.</div>

                {/* </div> */}

            </footer>

        // </div>
    )
}

export default Footer