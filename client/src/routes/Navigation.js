import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import routes from './routes';
import { map } from 'lodash';
import LayoutBasic from '../layouts/LayoutBasic';

const Navigation = () => {
  return (
    <Router>
      <LayoutBasic />
      <Routes>
          { map(routes, (route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={route.element}
            />
          ))}
      </Routes>
    </Router>
  )
}

export default Navigation;
