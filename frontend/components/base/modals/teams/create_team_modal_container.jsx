import { connect } from 'react-redux';
import { createTeam, clearErrors } from '../../../../actions/team_actions';
import { collapseCreateTeamModal } from '../../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import CreateTeamModal from './create_team_modal';



const mapStateToProps = (state) => {
  return ({
    errors: state.teams.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createTeam: (team) => dispatch(createTeam(team)),
    clearErrors: () => dispatch(clearErrors([])),
    collapseCreateTeamModal: () => dispatch(collapseCreateTeamModal())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTeamModal));
