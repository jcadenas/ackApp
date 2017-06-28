import { connect } from 'react-redux';
import Base from './base';

const mapStateToProps = (state, ownProps) => {
  return ({
    modals: state.modals,
    baseCurrentTeamId: ownProps.match.params.team_id,
    baseCurrentChannelId: ownProps.match.params.channel_id
  });
}

export default connect(
  mapStateToProps,
  null
)(Base);
