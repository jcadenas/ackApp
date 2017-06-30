import { connect } from 'react-redux';
import MessageThreadList from './message_thread_list';
import {createdOneMessage} from '../../../../actions/message_actions';


const mapStateToProps = (state, ownProps) => {
  return ({
    channelMessages: ownProps.channelMessages,
    currentChannelId: ownProps.currentChannelId
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createdOneMessage: (message) => dispatch(createdOneMessage(message))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageThreadList);
