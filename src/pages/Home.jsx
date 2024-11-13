import React from 'react';
import Carousel from "../Components/Carousel/Carousel"
import Card from "../Components/Card/ButtonCard";
import {cardHomeDataLeft,cardHomeDataRight} from "../Data/Data"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Helmet } from 'react-helmet';
 const Home = () => {
    
    return (
        <div style={{paddingBottom:"100px"}}>
            
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Container className='home' >
            <Row style={{margin:"0px"}}>
                <Col style={{padding:"0px"}}><Carousel/></Col>
            </Row>
            <Row className="justify-content-md-center down">
                <Col md="auto"><Card cardData ={cardHomeDataLeft}/></Col>
                <Col md="auto"><Card cardData ={cardHomeDataRight}/></Col>
            </Row>
            </Container>


           
        </div>
    );
};

export default Home
