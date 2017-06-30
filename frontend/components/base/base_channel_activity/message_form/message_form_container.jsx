import { connect } from 'react-redux';
import { createMessage } from '../../../../actions/message_actions';
import MessageForm from './message_form';


const mapStateToProps = (state, ownProps) => {
  return ({
    currentChannelId: ownProps.currentChannelId,
    currentTeamId: ownProps.currentTeamId
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createMessage: (message) => dispatch(createMessage(message))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageForm);
