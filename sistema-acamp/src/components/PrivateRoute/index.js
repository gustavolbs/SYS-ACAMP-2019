/**
 * Private Route
 * Component that turns public routes into private routes, and if user is not
 * logged, it redirects to login page.
 *
 * Additional librarys:
 *  - React Router Dom
 */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem('acamp2019token') === 'erasoisso' ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
