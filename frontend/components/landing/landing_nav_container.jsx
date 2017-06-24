import { connect } from 'react-redux';
import { destroySession, createSession } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import LandingNav from './landing_nav';

const mapStateToProps = ( state ) => {
  return ({
    loggedIn: Boolean(state.session.current_user)
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    destroySession: () => dispatch(destroySession()),
    logInDemoUser: (user) => dispatch(createSession(user))
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingNav));
