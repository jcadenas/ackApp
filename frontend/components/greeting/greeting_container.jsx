import { connect } from 'react-redux';
import { destroySession } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.current_user
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
)(Greeting);
