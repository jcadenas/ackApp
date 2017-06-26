import { connect } from 'react-redux';
import { createTeam, clearErrors } from '../../../../actions/team_actions';
import { createTeamToggle } from '../../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import CreateTeamModal from './create_team_modal';



const mapStateToProps = (state) => {
  return ({
    state
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createTeam: (team) => dispatch(createTeam(team)),
    clearErrors: () => dispatch(clearErrors([])),
    createTeamToggle: () => dispatch(createTeamToggle())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTeamModal));
