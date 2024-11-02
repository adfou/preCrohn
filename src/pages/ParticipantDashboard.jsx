import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Box, Card, CardContent, Button } from '@mui/material';
import { QuestionnaireStatusCard, ThreeCardsSection, NextStepsCard } from '../Components/Card/index';
import { useParticipantProfile, useNextStep,useRestart } from '../Hooks/index.mjs';
import {SetFormDataLogin,setCurrentSectionIndex} from "../store/slice/questionnaireSlice"
import { useDispatch } from 'react-redux';
import loadable from '@loadable/component';

const Loader = loadable(() => import('../ui-component/Loader'));

const ParticipantDashboard = () => {
  const navigate = useNavigate();
  const {profileData, loading, error } = useParticipantProfile();
  const [formDisabled, setFormDisabled] = useState(true);
  const [progression, setProgression] = useState(0);
  const [submitDate, setSubmitDate] = useState();
  const [phase, setPhase] = useState("BASELINE");
  const [role, setRole] = useState();
  const { triggerNextStep, nextStepData,nextStepLoading, nextStepError } = useNextStep();
  const { triggerRestart } = useRestart();
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      navigate('/login');
    }
    if (profileData && profileData.role === 1) {
      navigate('/dashboard');
    }
    if (profileData) {
      console.log("profileData:",profileData)
      setFormDisabled(profileData?.state === "0" ? false : true);
      setRole(profileData?.role);
      switch (profileData?.forms.length) {
        case 0:
          setProgression(0);
          setPhase(0);
          break;
        case 1:
          setProgression(profileData?.forms[0].completionPercentage);
          setSubmitDate(profileData?.forms[0]?.submit_date);
          setPhase(1);
          break;
        case 2:
          console.log("2!")
          setProgression(profileData?.forms[1].completionPercentage);
          setSubmitDate(profileData?.forms[1]?.submit_date);
          setPhase(2);
          break;
        case 3:
          setProgression(profileData?.forms[2].completionPercentage);
          setSubmitDate(profileData?.forms[2]?.submit_date);
          setPhase(3);
          break;
        default:
          break;
      }
    }
  }, [error, profileData, navigate]);

  useEffect(() => {
    if(nextStepData && nextStepData?.Result?.form?.form_data){
      
      let dataObj={};
      let dataNext =nextStepData?.Result?.form?.form_data
      try{
       
        if (dataNext=== 'string') {

          dataObj = JSON.parse(dataNext);
      } else if (typeof dataNext === 'object') {
      
          dataObj = dataNext; // If it's already an object, use it directly
      } else {
          console.error("Invalid form_data:", dataNext);
          //return; // Exit if form_data is neither a string nor an object
      }


      
      dispatch(SetFormDataLogin({ data: dataObj }));
      dispatch(setCurrentSectionIndex(0));
    }
    catch(err){
      console.error("there is non data",err);
      
      
    }


    }
  }, [nextStepData]);
//nextStepData
  const handleNextPhaseClick = async () => {
    try {
      await triggerNextStep();
      window.location.reload();
      console.log('Next step triggered successfully!');
    } catch (e) {
      console.error('Error executing next step:', e);
      alert('Failed to trigger next step.');
    }
  };

  const handleRestartClick = async () => {
    try {
      await triggerRestart();
      console.log('Restart triggered successfully!');
      window.location.reload();
    } catch (e) {
      console.error('Error executing restart:', e);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className='title-content'>
        <h1>My PRE-Crohn’s study</h1>
      </div>
      <Container
        sx={{
          width: '100%',
          height: '100%',
          margin: '0px !important',
          backgroundColor: '#fff',
          borderRadius: '8px',
          boxSizing: 'border-box',
          maxWidth: 'none !important',
          padding: '0px !important',
          paddingBottom: '100px !important',
        }}
      >
        {/* Title Section */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            mb: 4, // Margin bottom for spacing
          }}
        >
          {/* Left line */}
          <Box
            sx={{
              height: '11px',
              backgroundColor: '#A0D5EA',
              width: '259px',
              minWidth: '259px',
              marginRight: '24px',
            }}
          />
          {/* Title Box */}
          <Box sx={{ width: '259px' }}>
            <Typography
              variant="h5"
              fontWeight="bold"
              sx={{ color: '#085C7C', textAlign: 'left' }}
            >
              MY QUESTIONNAIRE
            </Typography>
          </Box>
          {/* Right line */}
          <Box
            sx={{
              height: '11px',
              backgroundColor: '#A0D5EA',
              flex: 1,
              marginLeft: '17px',
            }}
          />
        </Box>

        {/* Cards Section */}
        <Box sx={{ padding: '40px 0px 40px 0px', background: '#f4f9fd' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '40px',
              marginBottom: '40px',
              paddingRight: '200px',
              paddingLeft: '200px',
              justifyContent: 'center',
            }}
          >
            <QuestionnaireStatusCard Percentage={progression} FromDisabled={formDisabled} />
            
            {/* Participation Status Card */}
            <Card
              sx={{
                backgroundColor: '#ffffff',
                maxWidth: '428px',
                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                textAlign: 'center',
                padding: '0px',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#117BA3',
                  color: '#ffffff',
                  padding: '8px',
                  fontSize: '22px',
                  fontWeight: '700',
                }}
              >
                Participation status
              </Box>

              <CardContent
                sx={{
                  padding: '22px 0px 40px 45px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                  color: '#085C7C',
                  fontSize: '19px',
                  textAlign: 'left',
                }}
              >
                <Typography fontSize={19} sx={{paddingRight: '45px'}}>
                  Payments will be sent after each visit (after sample collection & questionnaire completion).
                </Typography>
                <ul style={{ marginTop: '10px', paddingLeft: '20px', color: '#085C7C', textAlign: 'left' }}>
                  <li>Baseline/When you join</li>
                  {role !== "3" && <li>8-week visit</li>}
                  <li>6-month visit</li>
                </ul>
                <Typography mt={2} fontWeight={'bold'} fontSize={19} sx={{ marginTop: '32px' }}>
                  Your status:
                  <Typography
                    component="span"
                    sx={{
                      backgroundColor: '#FCE7A0',
                      padding: '8px 60px',
                      borderRadius: '13px',
                      border: '1px solid #71B7D1',
                      fontWeight: 600,
                      marginLeft: '9px',
                      fontSize: '18px',
                    }}
                  >
                    
                    {phase === 0 || phase === 1 ? "BASELINE" : phase === 2 ? "PHASE TWO" : phase === 3 ? "PHASE THREE" : ""}
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Typography fontSize={19} sx={{ textAlign: 'center', marginBottom: '40px' }}>
            Payments will be sent after each visit (after sample collection & questionnaire completion).
          </Typography>
          <NextStepsCard date={submitDate} phase={phase} role={role} />
        </Box>

        <ThreeCardsSection progression={progression}/>

        {/* Thanks Section */}
        <Box sx={{ padding: '0px 255px 0px 300px', textAlign: 'left', maxWidth: '1435px' }}>
          <Typography variant="h2" fontWeight="bold" color="#0078b5" mb={2} fontSize={36} sx={{ fontWeight: '700' }}>
            Thanks for your participation!
          </Typography>
          <Typography variant="body1" mb={2} fontSize={19} sx={{ marginTop: '27px', marginBottom: '63px' }}>
            With your help, the Personal Risk Estimation for Crohn's Disease (PRE-Crohn's) study is learning how education about Crohn's risk impacts diet,
            behaviors, and Crohn's biomarkers (a marker in the blood or other tissue in people who have or are at risk for Crohn's).
          </Typography>
          <Typography variant="body1" fontWeight="600" fontSize={21}>
            This study, with your help, aims to gain insight into whether it's possible to prevent Crohn's disease in people who are at risk.
          </Typography>
        </Box>

        {/* Next Phase Button */}
        <Box sx={{ textAlign: 'center', mt: 5 }}>
          <Typography fontSize={15} sx={{ mb: 2 }}>
            This button is for test purposes.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            /*disabled={formDisabled}*/
            onClick={handleNextPhaseClick}
            sx={{
              fontSize: '18px',
              padding: '10px 20px',
              borderRadius: '8px',
              marginRight:"15px"
            }}
          >
            Next Phase
          </Button>
          <Button
            variant="contained"
            color="primary"
            /*disabled={formDisabled}*/
            onClick={handleRestartClick}
            sx={{
              fontSize: '18px',
              padding: '10px 20px',
              borderRadius: '8px',
            }}
          >
            Restart
          </Button>
          
        </Box>
      </Container>
    </>
  );
};

export default ParticipantDashboard;