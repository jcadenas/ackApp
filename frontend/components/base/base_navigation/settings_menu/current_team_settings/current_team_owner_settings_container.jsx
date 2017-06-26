import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CurrentTeamOwnerSettings from './current_team_owner_settings';
import { collapseEditTeamModal, expandEditTeamModal } from '../../../../../actions/modal_actions';
import { destroyTeam } from '../../../../../actions/team_actions';


const mapStateToProps = (state) => {
  return ({
    state
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    destroyTeam: (teamId) => dispatch(destroyTeam(teamId)),
    collapseEditTeamModal: () => dispatch(collapseEditTeamModal()),
    expandEditTeamModal: () => dispatch(expandEditTeamModal())
  });
}



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentTeamOwnerSettings));
