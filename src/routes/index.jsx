import { createBrowserRouter } from 'react-router-dom';

// routes
import MainRoutes from './MainRoutes';
import AuthRoutes from "./AuthRoutes"
import FormRoutes from "./FormRoutes"
//import LoginRoutes from './AuthenticationRoutes';

// ==============================|| ROUTING RENDER ||============================== //
const router = createBrowserRouter([MainRoutes,AuthRoutes,FormRoutes], {
  basename: import.meta.env.VITE_APP_BASE_NAME
});

export default router;
