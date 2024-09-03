import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import {BodyPage} from "../Components/Layout/index.mjs"
import { CrohnRiskData,InfoModalData } from "../Data";
import {CardBehavior,CardHumain,ColorRiskCard,CardBehaviorCheck} from "../Components/Card/index"
import {InfoModal} from "../Components/Modal/InfoModal"

 const CrohnRisk = ({title}) => {
    const [open, setOpen] = useState(false);
    const firtSetnance = "Based on the answers you provided to the questionnaires, your blood tests, and your stool tests,"
    const Diagnostics="you have a high risk for Crohn’s disease"
    const lastDiagnostics = "when compared to other people who have a family member with Crohn’s disease."
    const HumainSentnace ='Your personal risk of developing Crohn’s disease is 58%.'
    const behaviors = [
        "You're physically active",
        "You don't smoke",
      ];
      
    const Goodbehaviors = [
        "Lower your sucrose (sugar) intake",
        "Increase your physical activity",
        "Quit smoking"
      ];
    return (
        <>
           {title? <div className='title-content'><h1> {title}</h1> </div> :""}

            
            <Container className='content-container' >
            {   <BodyPage data={CrohnRiskData} />
            }
             <ColorRiskCard 
                riskLevel="HIGH" 
                firtSetnance={firtSetnance}
                Diagnostics={Diagnostics}
                lastDiagnostics={lastDiagnostics}

                />

            <CardHumain 
                    HumainSentnace={HumainSentnace}
                    firtSetnance={firtSetnance}
                    Diagnostics={Diagnostics}
                    lastDiagnostics={lastDiagnostics}
                    riskPercentage ={48}
                  
                    
                />
            <CardBehavior 
                    title="Keep up the good work!" 
                    subtitle="Great job! You reported behaviors that are associated with a lower risk for Crohn's disease:" 
                    behaviors={behaviors} 
                  
                    
                />
            <CardBehaviorCheck 
                    title="Watch your risk drop" 
                    subtitle="Check the boxes next to the behaviors below to see how these changes could reduce your risk of Crohn’s disease." 
                    behaviors={Goodbehaviors} 
                    openMpdal={()=>{setOpen(true)}}
                  
                    
                />



            </Container>

            {<InfoModal open={open} handleClose={()=>{setOpen(false)}} title="Lower your sucrose (sugar) intake" content={InfoModalData.content}  />
            }
    

           
        </>
    );
};


export default CrohnRisk;