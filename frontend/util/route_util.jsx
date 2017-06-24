import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router-dom';

const Auth = ({component: Component, path, loggedIn}) => {
  return (
    <Route path={path} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/messages" />
      )
    )}/>
  );
};

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/signup" />
    )
  )} />
);

const mapStateToProps = (state) => {
  return {loggedIn: Boolean(state.session.current_user)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
