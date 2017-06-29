import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CurrentTeamWrapper from './current_team_wrapper';
import { currentTeam } from '../../../../../selectors/selectors';


const mapStateToProps = (state, ownProps) => {
  return ({
    current_user: state.session.current_user,
    currentTeam: state.teams.entities[ownProps.baseCurrentTeamId]
  });
}

export default connect(
  mapStateToProps,
  null
)(CurrentTeamWrapper);
