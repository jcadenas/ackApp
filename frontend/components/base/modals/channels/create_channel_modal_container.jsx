import { connect } from 'react-redux';
import { createChannel, clearChannelErrors } from '../../../../actions/channel_actions';
import { collapseCreateChannelModal } from '../../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import CreateChannelModal from './create_channel_modal';



const mapStateToProps = (state) => {
  return ({
    errors: state.channels.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createChannel: (channel) => dispatch(createChannel(channel)),
    clearChannelErrors: () => dispatch(clearChannelErrors()),
    collapseCreateChannelModal: () => dispatch(collapseCreateChannelModal())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateChannelModal));
