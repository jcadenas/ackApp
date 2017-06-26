import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SettingsMenu from './settings_menu';


const mapStateToProps = (state) => {
  return ({
    current_user: state.session.current_user,
    teams: state.teams.entities
  });
}

export default withRouter(connect(
  mapStateToProps,
  null
)(SettingsMenu));
