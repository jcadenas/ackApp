import { connect } from 'react-redux';
import { createSubscription } from '../../../../actions/subscription_actions';
import { collapseCreateSubscriptionModal } from '../../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import CreateSubscriptionModal from './create_subscription_modal';
import { nonUserTeamChannels } from '../../../../selectors/selectors';



const mapStateToProps = (state) => {
  return ({
    teamChannels: state.channels.entities,
    session: state.session,
    nonUserTeamChannels: nonUserTeamChannels(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  // TODO Move createSubscription to the li container for each button
  return ({
    createSubscription: (subscription) => dispatch(createSubscription(subscription)),
    collapseCreateSubscriptionModal: () => dispatch(collapseCreateSubscriptionModal())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSubscriptionModal));
