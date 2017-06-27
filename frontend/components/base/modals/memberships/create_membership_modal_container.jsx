import { connect } from 'react-redux';
import { createMembership } from '../../../../actions/membership_actions';
import { collapseCreateMembershipModal } from '../../../../actions/modal_actions';
import { withRouter } from 'react-router-dom';
import CreateMembershipModal from './create_membership_modal';



const mapStateToProps = (state) => {
  return ({
    teams: state.teams.entities,
    teamErrors: state.teams.errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createMembership: (membership) => dispatch(createMembership(membership)),
    collapseCreateMembershipModal: () => dispatch(collapseCreateMembershipModal())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateMembershipModal));
