import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchTeamChannels } from '../../../../actions/channel_actions';
import ChannelNavigation from './channel_navigation';
import { userTeamChannels, teamChannelIds } from '../../../../selectors/selectors';


const mapStateToProps = (state, ownProps) => {
  return ({
    teams: state.teams.entities,
    channels: state.channels.entities,
    session: state.session,
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
