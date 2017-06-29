import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ChannelNavigationHeader from './channel_navigation_header';
import { collapseCreateChannelModal, expandCreateChannelModal, expandCreateSubscriptionModal } from '../../../../actions/modal_actions';

const mapStateToProps = (state) => {
  return ({
    state
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    collapseCreateChannelModal: () => dispatch(collapseCreateChannelModal()),
    expandCreateChannelModal: () => dispatch(expandCreateChannelModal()),
    expandCreateSubscriptionModal: () => dispatch(expandCreateSubscriptionModal())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelNavigationHeader);
