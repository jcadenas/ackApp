import { connect } from 'react-redux';
import Base from './base';

const mapStateToProps = (state, ownProps) => {
  return ({
    channels: state.channels.entities,
    teams: state.teams.entities,
    modals: state.modals,
    baseCurrentTeamId: ownProps.match.params.team_id,
    baseCurrentChannelId: ownProps.match.params.channel_id
  });
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Base);
