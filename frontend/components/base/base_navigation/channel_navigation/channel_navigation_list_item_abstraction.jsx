import React from 'react';
import { connect } from 'react-redux';
import ChannelNavigationListItem from './channel_navigation_list_item';

class ChannelNavigationListItemAbstraction extends React.Component {

  render() {
    return(
      <ChannelNavigationListItem channelId={this.props.channelId} teamId={this.props.teamId} />
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return ({
    channelId: ownProps.match.params.channel_id,
    teamId: ownProps.match.params.team_id
  })
};

export default connect(
  mapStateToProps,
  null
)(ChannelNavigationListItemAbstraction);
