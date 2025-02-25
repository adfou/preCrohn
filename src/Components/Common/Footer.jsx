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
                    <Col md={3} className="justify-content-md-center logo-footer-container">
                        <img src="/logo-footer.svg" alt="Dana-Farber Cancer Institute" className="footer-logo pre-c" />
                        <img src="/MGH_logo.svg" alt="Dana-Farber Cancer Institute" className="footer-logo mgh" />
                    </Col>
                    </Row>
                    {/* Navigation Links */}
                    <Row className="justify-content-md-center one">
                    <Col md={6} className="text-center ">
                      
                                    
                                    <a href="/contact" className="footer-link">Contact</a> | &nbsp;
                                    <a href="/login" className="footer-link">Admin</a>
                           
                    </Col>
                    </Row>
                    <Row className="justify-content-md-center two">
                    {/* Copyright and Additional Links */}
                    <Col md={6} className="text-center text-md-right ">
                            <p>
                            Copyright © 2024 Massachusetts General Hospital. All Rights Reserved
                            </p>
                            
                            <a href="https://www.massgeneral.org/notices/privacy/websiteprivacy" target="_blank" className="footer-link">Privacy Policy</a> | 
                            <a href="https://www.massgeneral.org/notices/terms-of-use"  target="_blank" className="footer-link"> Terms of Use</a>
                            <br/>
                            
                            <div style={{marginTop:"4px"}}>
                            
                            Site developed by <a className="footer-link" href="https://healthcommcore.org/" target="_blank" >Health Communication Core</a></div>
                        
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
