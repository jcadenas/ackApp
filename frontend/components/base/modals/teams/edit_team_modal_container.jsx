import { connect } from 'react-redux';
import { updateOneTeam, clearErrors } from '../../../../actions/team_actions';
import { collapseEditTeamModal } from '../../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import EditTeamModal from './edit_team_modal';



const mapStateToProps = (state) => {
  return ({
    teams: state.teams.entities,
    errors: state.teams.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    updateOneTeam: (team) => dispatch(updateOneTeam(team)),
    clearErrors: () => dispatch(clearErrors([])),
    collapseEditTeamModal: () => dispatch(collapseEditTeamModal())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTeamModal));
