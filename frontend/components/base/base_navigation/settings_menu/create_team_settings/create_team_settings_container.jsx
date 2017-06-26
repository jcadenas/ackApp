import { connect } from 'react-redux';
import { expandCreateTeamModal, collapseCreateTeamModal } from '../../../../../actions/modal_actions';
import CreateTeamSettings from './create_team_settings';

const mapStateToProps = (state) => {
  return ({
    teams: state.teams.entities,
    modals: state.modals
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    expandCreateTeamModal: () => dispatch(expandCreateTeamModal()),
    collapseCreateTeamModal: () => dispatch(collapseCreateTeamModal())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTeamSettings);
