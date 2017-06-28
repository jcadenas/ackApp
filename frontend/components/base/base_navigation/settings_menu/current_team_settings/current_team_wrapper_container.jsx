import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CurrentTeamWrapper from './current_team_wrapper';


const mapStateToProps = (state, ownProps) => {
  return ({
    current_user: state.session.current_user,
    teams: state.teams.entities,
    baseCurrentTeamId: ownProps.baseCurrentTeamId
  });
}

export default connect(
  mapStateToProps,
  null
)(CurrentTeamWrapper);
