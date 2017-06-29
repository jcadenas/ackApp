import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SwitchTeams from './switch_teams';
import { currentTeam } from '../../../../../selectors/selectors';


const mapStateToProps = (state, ownProps) => {
  return ({
    teams: state.teams.entities,
    currentTeam: state.teams.entities[ownProps.baseCurrentTeamId]
  });
}

export default connect(
  mapStateToProps,
  null
)(SwitchTeams);
