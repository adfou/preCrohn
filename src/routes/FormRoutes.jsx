import { MainLayout } from '../Components/Layout/MainLayout';
import { AuthLayout } from '../Components/Layout/index.mjs';
import PrivateRoute from './PrivateRoute'; // Import your PrivateRoute component
import Loader from '../ui-component/Loader';
import loadable from '@loadable/component';
// DATA
import { GeneralInformationData, YourmedicalhistoryData, FamilyHistoryData,CrohnRiskData } from "../Data";

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
          element: <Questionnaire title={"PRE-Crohn’s study GeneralInformation"} Data={GeneralInformationData} />,
        },
      ],
    },
    {
      path: '/medical-history',
      element: <MainLayout type={"questionnaire"} />,
      children: [
        {
          path: '',
          element: <Questionnaire title={"PRE-Crohn’s study GeneralInformation"} Data={YourmedicalhistoryData} />,
        },
      ],
    },
    {
      path: '/family-history',
      element: <MainLayout type={"questionnaire"} />,
      children: [
        {
          path: '',
          element: <Questionnaire title={"PRE-Crohn’s study GeneralInformation"} Data={FamilyHistoryData} />,
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
   
  ],
};

export default FormRoutes;
