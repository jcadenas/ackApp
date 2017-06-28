import { connect } from 'react-redux';
import { createSubscription } from '../../../../actions/subscription_actions';
import { withRouter } from 'react-router-dom';
import CreateSubscriptionListItem from './create_subscription_list_item';



const mapStateToProps = (state, ownProps) => {
  return ({
    currentChannelId: ownProps.channelId,
    channels: state.channels.entities
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createSubscription: (subscription) => dispatch(createSubscription(subscription)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateSubscriptionListItem);
