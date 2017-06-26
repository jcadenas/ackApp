import { connect } from 'react-redux';
import { updateOneTeam, clearErrors } from '../../../../actions/team_actions';
import { editTeamToggle } from '../../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import EditTeamModal from './edit_team_modal';



const mapStateToProps = (state) => {
  return ({
    state
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    updateOneTeam: (team) => dispatch(updateOneTeam(team)),
    clearErrors: () => dispatch(clearErrors([])),
    editTeamToggle: () => dispatch(editTeamToggle())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTeamModal));
