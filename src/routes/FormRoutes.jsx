import { MainLayout } from '../Components/Layout/MainLayout';
import { AuthLayout } from '../Components/Layout/index.mjs';
import PrivateRoute from './PrivateRoute'; // Import your PrivateRoute component
import Loader from '../ui-component/Loader';
import loadable from '@loadable/component';

// DATA
import { GeneralInformationData, YourmedicalhistoryData, FamilyHistoryData,
        CrohnRiskData,Yourdiet,Yourphysicalactivity ,Yoursmokinghistory,Yourdietcheese ,
        YourdietVEGETABLES,YourdietMEAT,YoutdietBREADS,YoutdietBEVERAGES,YourdietSWEETS,KnowledgEandAttitudes
      } from "../Data";

// Page imports using @loadable/component with a fallback loader

const Questionnaire = loadable(() => import('../pages/Questionnaire'), {
  fallback: <Loader />,
});
const CrohnRisk = loadable(() => import('../pages/CrohnRisk'), {
  fallback: <Loader />,
});

// ==============================|| MAIN ROUTING ||============================== //

const FormRoutes = {
  path: '/',
  children: [

    {
      path: '/general-Information',
      element: <MainLayout type={"questionnaire"} />,
      children: [
        {
          path: '',
          element: 
          <PrivateRoute>
          <Questionnaire title={"PRE-Crohn’s study Questionnaire"} Data={GeneralInformationData} />
        </PrivateRoute>
        ,
        },
      ],
    },
    {
      path: '/medical-history',
      element: <MainLayout type={"questionnaire"} />,
      children: [
        {
          path: '',
          element: <Questionnaire title={"PRE-Crohn’s study Questionnaire"} Data={YourmedicalhistoryData} />,
        },
      ],
    },
    {
      path: '/family-history',
      element: <MainLayout type={"questionnaire"} />,
      children: [
        {
          path: '',
          element: <Questionnaire title={"PRE-Crohn’s study Questionnaire"} Data={FamilyHistoryData} />,
        },
      ],
    },
    {
      path: '/crohn-risk',
      element: <MainLayout type={"questionnaire"} />,
      children: [
        {
          path: '',
          element: <CrohnRisk title={"Your personalized Crohn’s risk"} Data={CrohnRiskData} />,
        },
      ],
    },
    
    {
      path: '/your-diet',
      element: <MainLayout type={"questionnaire"} />,
      children: [
        {
          path: '',
          element: <Questionnaire title={"PRE-Crohn’s study Questionnaire"} Data={Yourdiet} />,
        },
      ],
    },

    {
      path: '/your-diet-2',
      element: <MainLayout type={"questionnaire"} />,
      children: [
        {
          path: '',
          element: <Questionnaire title={"PRE-Crohn’s study Questionnaire"} Data={Yourdietcheese} />,
        },
      ],
    },

    {
      path: '/your-diet-3',
      element: <MainLayout type={"questionnaire"} />,
      children: [
        {
          path: '',
          element: <Questionnaire title={"PRE-Crohn’s study Questionnaire"} Data={YourdietVEGETABLES} />,
        },
      ],
    },

    {
      path: '/your-diet-4',
      element: <MainLayout type={"questionnaire"} />,
      children: [
        {
          path: '',
          element: <Questionnaire title={"PRE-Crohn’s study Questionnaire"} Data={YourdietMEAT} />,
        },
      ],
    },

    {
      path: '/your-diet-5',
      element: <MainLayout type={"questionnaire"} />,
      children: [
        {
          path: '',
          element: <Questionnaire title={"PRE-Crohn’s study Questionnaire"} Data={YoutdietBREADS} />,
        },
      ],
    },

    {
      path: '/your-diet-6',
      element: <MainLayout type={"questionnaire"} />,
      children: [
        {
          path: '',
          element: <Questionnaire title={"PRE-Crohn’s study Questionnaire"} Data={YoutdietBEVERAGES} />,
        },
      ],
    },

    {
      path: '/your-diet-7',
      element: <MainLayout type={"questionnaire"} />,
      children: [
        {
          path: '',
          element: <Questionnaire title={"PRE-Crohn’s study Questionnaire"} Data={YourdietSWEETS} />,
        },
      ],
    },
    

    {
      path: '/your-physical-activity',
      element: <MainLayout type={"questionnaire"} />,
      children: [
        {
          path: '',
          element: <Questionnaire title={"PRE-Crohn’s study Questionnaire"} Data={Yourphysicalactivity} />,
        },
      ],
    },
    {
      path: '/your-smoking-history',
      element: <MainLayout type={"questionnaire"} />,
      children: [
        {
          path: '',
          element: <Questionnaire title={"PRE-Crohn’s study Questionnaire"} Data={Yoursmokinghistory} />,
        },
      ],
    },

    {
      path: '/knowledge-and-attitudes-survey',
      element: <MainLayout type={"questionnaire"} />,
      children: [
        {
          path: '',
          element: <Questionnaire title={"CROHN’S DISEASE: KNOWLEDGE AND ATTITUDES SURVEY (Optional) "} Data={KnowledgEandAttitudes}  type="fixe"/>,
        },
      ],
    },

  ],
};

export default FormRoutes;
