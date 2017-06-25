import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CurrentTeamMemberSettings from './current_team_member_settings';
// import { editTeamToggle } from '../../../../../actions/modal_actions';
// import { destroyTeam } from '../../../../../actions/team_actions';


const mapStateToProps = (state) => {
  return ({
    state
  });
}

// const mapDispatchToProps = (dispatch) => {
//   return ({
//    Need to build out membership redux flow
//   });
// }


// TODO update connect with dispatch for memberships
export default withRouter(connect(
  mapStateToProps,
  null
)(CurrentTeamMemberSettings));
