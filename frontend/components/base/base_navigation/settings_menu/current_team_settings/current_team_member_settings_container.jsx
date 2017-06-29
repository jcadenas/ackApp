import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CurrentTeamMemberSettings from './current_team_member_settings';
import { destroyMembership } from '../../../../../actions/membership_actions';
import { currentTeam } from '../../../../../selectors/selectors';


const mapStateToProps = (state, ownProps) => {
  return ({
    teams: state.teams.entities,
    currentTeam: currentTeam(state, ownProps)
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
   destroyMembership: (team_id) => dispatch(destroyMembership(team_id))
  });
}


// TODO update connect with dispatch for memberships
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentTeamMemberSettings));
