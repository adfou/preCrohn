import { lazy } from 'react';
import { MainLayout } from '../Components/Layout/MainLayout';
import { AuthLayout } from '../Components/Layout/index.mjs';
import Loadable from 'ui-component/Loadable';
import PrivateRoute from './PrivateRoute'; // Import your PrivateRoute component
// DATA
import { GeneralInformationData, YourmedicalhistoryData, FamilyHistoryData } from "../Data";

// Page imports
const DashboardAdmin = Loadable(lazy(() => import('../pages/Dashboard')));
const Home = Loadable(lazy(() => import('../pages/Home')));
const Login = Loadable(lazy(() => import('../pages/Login')));
const About = Loadable(lazy(() => import('../pages/About')));
const Questionnaire = Loadable(lazy(() => import('../pages/Questionnaire')));

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
