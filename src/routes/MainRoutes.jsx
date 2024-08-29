import { MainLayout } from '../Components/Layout/MainLayout';
import { AuthLayout } from '../Components/Layout/index.mjs';
import PrivateRoute from './PrivateRoute'; // Import your PrivateRoute component
import Loader from '../ui-component/Loader';
import loadable from '@loadable/component';
// DATA
import { GeneralInformationData, YourmedicalhistoryData, FamilyHistoryData } from "../Data";

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
const About = loadable(() => import('../pages/About'), {
  fallback: <Loader />,
});
const Questionnaire = loadable(() => import('../pages/Questionnaire'), {
  fallback: <Loader />,
});
const PatientDashboard = loadable(() => import('../pages/Patient'), {
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
          element: <About title={"About"} />,
        },
      ],
    },
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
      path: '/dashboard',
      element: (
        <PrivateRoute>
          <AuthLayout />
        </PrivateRoute>
      ),
      children: [
        {
          path: '',
          element: <DashboardAdmin />,
        },
      ],
    },
    {
      path: '/Patient',
      element: (
        <PrivateRoute>
          <AuthLayout />
        </PrivateRoute>
      ),
      children: [
        {
          path: '',
          element: <PatientDashboard />,
        },
      ],
    },
    {
      path: '/login',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Login />,
        },
      ],
    },
  ],
};

export default MainRoutes;
