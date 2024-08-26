// src/components/Footer.js
import React from 'react';
import { Container, Row, Col, Navbar } from 'react-bootstrap';
//import '../../assets/scss/Common.scss'; 

const Footer = () => {
    return (
        <footer className="footer bg-light">
            <Container  >
                <Row className="justify-content-md-center">
                    {/* Logo */}
                    <Col md={3} className="justify-content-md-center">
                        <img src="/logo-footer.svg" alt="Dana-Farber Cancer Institute" className="footer-logo" />
                    </Col>
                    </Row>
                    {/* Navigation Links */}
                    <Row className="justify-content-md-center one">
                    <Col md={6} className="text-center ">
                      
                                    <a href="/sitemap" className="footer-link">Sitemap</a> | &nbsp;
                                    <a href="/contact" className="footer-link">Contact</a> | &nbsp;
                                    <a href="/login" className="footer-link">Admin</a>
                           
                    </Col>
                    </Row>
                    <Row className="justify-content-md-center two">
                    {/* Copyright and Additional Links */}
                    <Col md={6} className="text-center text-md-right ">
                            <p>
                            Copyright © 2024 Dana-Farber Cancer Institute, Inc. All Rights Reserved
                            </p>
                            
                            <a href="/privacy-policy" className="footer-link">Privacy Policy</a> |
                            <a href="/terms-of-use" className="footer-link">Terms of Use</a>
                            <br/>
                            
                            <div>
                            
                            Site developed by <a className="footer-link">Health Communication Core</a></div>
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
