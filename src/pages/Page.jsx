import React from 'react';
import Carousel from "../Components/Carousel/Carousel"
import Card from "../Components/Card/ButtonCard";
import {cardHomeDataLeft,cardHomeDataRight} from "../Data/Data"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {BodyPage} from "../Components/Layout/index.mjs"
import { Helmet } from 'react-helmet';
import { useVerifyToken } from '../Hooks/index.mjs';
 const Page = ({title,data,type}) => {
    return (
        <>
        <Helmet>
        <title>{title?title:"Pre-crohn's"}</title>
      </Helmet>
           {title? <div className='title-content'><h1> {title}</h1> </div> :""}

            
            <Container className='content-container' >
            {   <BodyPage data={data} />
            }
            
            </Container>
          {type==="final"?
          "ss":""}

           
        </>
    );
};


export default Page;