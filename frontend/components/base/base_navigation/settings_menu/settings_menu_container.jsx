import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SettingsMenu from './settings_menu';


const mapStateToProps = (state) => {
  return ({
    state
  });
}

export default withRouter(connect(
  mapStateToProps,
  null
)(SettingsMenu));
