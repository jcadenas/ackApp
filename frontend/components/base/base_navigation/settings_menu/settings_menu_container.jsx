// 6/28 8:17pm | May not need this container.

import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SettingsMenu from './settings_menu';
import { fetchUserTeams } from '../../../../actions/team_actions';




const mapStateToProps = (state, ownProps) => {
  return ({
    current_user: state.session.current_user,
    teams: state.teams.entities
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    fetchUserTeams: () => dispatch(fetchUserTeams())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsMenu));
