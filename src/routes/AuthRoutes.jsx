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

const Login = loadable(() => import('../pages/Login'), {
  fallback: <Loader />,
});

const PatientDashboard = loadable(() => import('../pages/Patient'), {
  fallback: <Loader />,
});




const AuthRoutes = {
  path: '/',
  children: [

    
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

export default AuthRoutes;
