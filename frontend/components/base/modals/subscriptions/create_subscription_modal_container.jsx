import { connect } from 'react-redux';
import { createSubscription } from '../../../../actions/subscription_actions';
import { collapseCreateSubscriptionModal } from '../../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import CreateSubscriptionModal from './create_subscription_modal';
import { nonUserTeamChannels } from '../../../../selectors/selectors';



const mapStateToProps = (state, ownProps) => {
  return ({
    teamChannels: state.channels.entities,
    session: state.session,
    nonUserTeamChannelsArr: nonUserTeamChannels(state, ownProps)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createSubscription: (subscription) => dispatch(createSubscription(subscription)),
    collapseCreateSubscriptionModal: () => dispatch(collapseCreateSubscriptionModal())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSubscriptionModal));
