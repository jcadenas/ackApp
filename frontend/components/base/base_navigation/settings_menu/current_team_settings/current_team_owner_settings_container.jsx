import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CurrentTeamOwnerSettings from './current_team_owner_settings';
import {
  collapseEditTeamModal,
  expandEditTeamModal,
  expandCreateMembershipModal,
  collapseCreateMembershipModal
  } from '../../../../../actions/modal_actions';
import { destroyTeam } from '../../../../../actions/team_actions';
import { currentTeam } from '../../../../../selectors/selectors';


const mapStateToProps = (state, ownProps) => {
  return ({
    modals: state.modals,
    currentTeam: currentTeam(state, ownProps),
    baseCurrentTeamId: ownProps.baseCurrentTeamId
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    destroyTeam: (teamId) => dispatch(destroyTeam(teamId)),
    collapseEditTeamModal: () => dispatch(collapseEditTeamModal()),
    expandEditTeamModal: () => dispatch(expandEditTeamModal()),
    collapseCreateMembershipModal: () => dispatch(collapseCreateMembershipModal()),
    expandCreateMembershipModal: () => dispatch(expandCreateMembershipModal())
  });
}



export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentTeamOwnerSettings));
