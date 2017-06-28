import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchTeamChannels
} from '../../../../actions/channel_actions';
import ChannelNavigation from './channel_navigation';
import { userTeamChannels } from '../../../../selectors/selectors';


const mapStateToProps = (state, ownProps) => {
  return ({
    teamChannels: state.channels.entities,
    session: state.session,
    baseCurrentTeamId: ownProps.baseCurrentTeamId,
    baseCurrentChannelId: ownProps.baseCurrentChannelId,
    userTeamChannels: userTeamChannels(state, ownProps)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchTeamChannels: (teamId) => dispatch(fetchTeamChannels(teamId))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelNavigation);
