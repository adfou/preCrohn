import { MainLayout } from '../Components/Layout/MainLayout';
import { AuthLayout } from '../Components/Layout/index.mjs';
import PrivateRoute from './PrivateRoute'; // Import your PrivateRoute component
import Loader from '../ui-component/Loader';
import loadable from '@loadable/component';
// DATA
import { GeneralInformationData, YourmedicalhistoryData, FamilyHistoryData ,AboutTheStudy,DiseaseInformation} from "../Data";

// Page imports using @loadable/component with a fallback loader
const DashboardAdmin = loadable(() => import('../pages/Dashboard'), {
  fallback: <Loader />,
});
const Home = loadable(() => import('../pages/Home'), {
  fallback: <Loader />,
});
const Login = loadable(() => import('../pages/Login'), {
  fallback: <Loader />,
});
const Page = loadable(() => import('../pages/Page'), {
  fallback: <Loader />,
});
const Questionnaire = loadable(() => import('../pages/Questionnaire'), {
  fallback: <Loader />,
});
const PatientDashboard = loadable(() => import('../pages/Patient'), {
  fallback: <Loader />,
});

const CrohnRisk = loadable(() => import('../pages/CrohnRisk'), {
  fallback: <Loader />,
});

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
      ],
    },
    {
      path: '/about',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Page title={"About"} data={AboutTheStudy}/>,
        },
      ],
    }
    ,
    {
      path: '/disease-information',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Page title={"CROHN’S DISEASE INFORMATION"} data={DiseaseInformation} />,
        },
      ],
    },
    
  ],
};

export default MainRoutes;
