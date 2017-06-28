import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SwitchTeams from './switch_teams';


const mapStateToProps = (state, ownProps) => {
  return ({
    teams: state.teams.entities,
    baseCurrentTeamId: ownProps.baseCurrentTeamId
  });
}

export default withRouter(connect(
  mapStateToProps,
  null
)(SwitchTeams));
