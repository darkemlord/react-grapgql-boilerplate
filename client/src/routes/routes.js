import Home from '../pages/Home';
import User from '../pages/User';
import Error404 from '../pages/Error404';


// Pages
const routes = [
  {
    path: '/',
    element: <Home />,
    exact: true
  },

  {
    path: '/:username',
    element: <User />,
    exact: true
  },

  {
    path: '*',
    element: <Error404 />,
    exact: true
  },
]

export default routes;
