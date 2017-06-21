import { connect } from 'react-redux';
import { createSession, createUser, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ( state ) => {
  return ({
    loggedIn: Boolean(state.session.current_user),
    errors: state.session.errors
  });
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
  const formType = ownProps.location.pathname.slice(1);
  return ({
    formType,
    processForm: (user) => {
      if (formType === 'signup') {
        return dispatch(createUser(user));
      } else {
        return dispatch(createSession(user));
      }
    },
    clearErrors: (errors) => dispatch(clearErrors(errors))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
