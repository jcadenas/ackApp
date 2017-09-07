import { connect } from 'react-redux';
import Base from './base';

const mapStateToProps = (state, ownProps) => {
  return ({
    channels: state.channels.entities,
    teams: state.teams.entities,
    modals: state.modals
  });
}


export default connect(
  mapStateToProps,
  null
)(Base);
