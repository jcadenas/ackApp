import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CurrentTeamWrapper from './current_team_wrapper';


const mapStateToProps = (state) => {
  return ({
    state
  });
}

export default withRouter(connect(
  mapStateToProps,
  null
)(CurrentTeamWrapper));
