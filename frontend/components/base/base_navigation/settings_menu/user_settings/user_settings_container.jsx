import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { destroySession } from '../../../../../actions/session_actions';
import UserSettings from './user_settings';

const mapStateToProps = (state, ownProps) => {
  return ({
    current_user: state.session.current_user
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    destroySession: () => dispatch(destroySession())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSettings);
