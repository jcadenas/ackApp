import { connect } from 'react-redux';
import LandingNav from './landing_nav';
import { destroySession } from '../../actions/session_actions';

const mapStateToProps = ( state ) => {
  return ({
    loggedIn: Boolean(state.session.current_user)
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    destroySession: () => dispatch(destroySession())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingNav);
