import { connect } from 'react-redux';
import MessageThreadList from './message_thread_list';


const mapStateToProps = (state, ownProps) => {
  return ({
    channelMessages: ownProps.channelMessages
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
  });
};

export default connect(
  mapStateToProps,
  null
)(MessageThreadList);
