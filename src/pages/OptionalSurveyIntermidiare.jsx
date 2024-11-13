import React from 'react';
import Carousel from "../Components/Carousel/Carousel"
import Card from "../Components/Card/ButtonCard";
import {cardHomeDataLeft,cardHomeDataRight} from "../Data/Data"
import Container from 'react-bootstrap/Container';
import { Box, Button, CircularProgress } from '@mui/material';
import {BodyPage} from "../Components/Layout/index.mjs"
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
 const OptionalSurveyIntermidiare = ({title,data}) => {
    const navigate = useNavigate();
    return (
        <>
        <Helmet>
        <title>{title?title:"Pre-crohn's"}</title>
      </Helmet>
           {title? <div className='title-content'><h1> {title}</h1> </div> :""}

            
            <Container className='content-container' >
            {   <BodyPage data={data} />
            }

        <div className='bigger-container-option'>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/knowledge-and-attitudes-survey")}
                        className="button-survey bigger"   
                        
                    >
                        Take the optional survey
                    </Button>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/crohns-disease-information")}
                        className="button-survey bigger"   
                        
                    >
                        Continue to Crohn’s disease information
                    </Button>
                    </div>
            
            </Container>
            

           
        </>
    );
};


export default OptionalSurveyIntermidiare;