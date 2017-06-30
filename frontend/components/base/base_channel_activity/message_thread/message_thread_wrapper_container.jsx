import { connect } from 'react-redux';
import { fetchChannelMessages } from '../../../../actions/message_actions';
import MessageThreadWrapper from './message_thread_wrapper';
import { channelMessages } from '../../../../selectors/selectors';


const mapStateToProps = (state, ownProps) => {
  return ({
    channelMessages: channelMessages(state, ownProps),
    currentChannelId: ownProps.currentChannelId,
    currentTeamId: ownProps.currentTeamId
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageThreadWrapper);
