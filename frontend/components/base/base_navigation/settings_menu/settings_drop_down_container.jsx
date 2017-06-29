import { connect } from 'react-redux';
import { collapseCreateTeamModal, collapseEditTeamModal, collapseCreateMembershipModal } from '../../../../actions/modal_actions';
import SettingsDropDown from './settings_drop_down';

const mapDispatchToProps = (dispatch) => {
  return({
    collapseCreateTeamModal: () => dispatch(collapseCreateTeamModal()),
    collapseEditTeamModal: () => dispatch(collapseEditTeamModal()),
    collapseCreateMembershipModal: () => dispatch(collapseCreateMembershipModal()),
  });
}

const mapStateToProps = (state, ownProps) => {
  return({
    baseCurrentTeamId: ownProps.baseCurrentTeamId
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingsDropDown);
