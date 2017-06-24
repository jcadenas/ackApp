import { connect } from 'react-redux';
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BaseWrapper);
