import { connect } from 'react-redux';
import { collapseCreateTeamModal, collapseEditTeamModal } from '../../../../actions/modal_actions';
import SettingsDropDown from './settings_drop_down';

const mapDispatchToProps = (dispatch) => {
  return({
    collapseCreateTeamModal: () => dispatch(collapseCreateTeamModal()),
    collapseEditTeamModal: () => dispatch(collapseEditTeamModal())
  });
}

export default connect(
  null,
  mapDispatchToProps
)(SettingsDropDown);
