import Home from '../pages/Home';
import User from '../pages/User';
import Error404 from '../pages/Error404';
import { Navigate } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Home />,
    exact: true
  },

  {
    path: '/user',
    element: <User />,
    exact: true
  },

  {
    path: '/error404',
    element: <Error404 />,
    exact: true
  },
  {
    path: '*',
    element: <Navigate to='/error404'/>,
  },
]

export default routes;
