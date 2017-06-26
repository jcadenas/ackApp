import { connect } from 'react-redux';
import { createTeamToggle } from '../../../../../actions/modal_actions';
import CreateTeamSettings from './create_team_settings';

const mapStateToProps = (state) => {
  return ({
    state
  });
}

const mapDispatchToProps = (dispatch) => {
  return ({
    createTeamToggle: () => dispatch(createTeamToggle())
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTeamSettings);
