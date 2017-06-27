import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchUserTeams } from '../../actions/team_actions';
import BaseWrapper from './base_wrapper';


const mapStateToProps = (state) => {
  return ({
    state
  });
};

const mapDispatchToProps = (dispatch) => {
  return({
    fetchUserTeams: () => dispatch(fetchUserTeams())
  });
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseWrapper));
