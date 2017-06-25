import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CurrentTeamOwnerSettings from './current_team_owner_settings';
import { editTeamToggle } from '../../../../../actions/modal_actions';
import { destroyTeam } from '../../../../../actions/team_actions';


const mapStateToProps = (state) => {
  return ({
    state
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    destroyTeam: (teamId) => dispatch(destroyTeam(teamId)),
    editTeamToggle: () => dispatch(editTeamToggle())
  });
}



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentTeamOwnerSettings));
