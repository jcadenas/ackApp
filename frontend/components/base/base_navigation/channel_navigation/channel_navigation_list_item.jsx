import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';


class ChannelNavigationListItem extends React.Component {

  isSelected(channelId){
    if (channelId === this.props.currentChannelId){
      return 'channel-nav-list-item-selected';
    } else {
      return 'channel-nav-list-item-unselected';
    }
  }

  render(){
    return(
      <li key={this.props.listChannelId} className={`${this.isSelected(this.props.listChannelId)}`}>
        <Link to={`/messages/${this.props.teamId}/${this.props.listChannelId}`}>
          <span className='channel-nav-hash'>#</span>
          <span className='switch-to-channel'>{this.props.teamChannels[this.props.listChannelId].name}</span>
        </Link>
      </li>
    );
  }

}

const mapStateToProps = (state, ownProps) => {
  return ({
    teamChannels: state.teams.entities,
    currentChannelId: ownProps.baseCurrentChannelIdchannelId,
    listChannelId: ownProps.listChannelId,
    teamId: ownProps.teamId
  })
}

export default connect(
  mapStateToProps,
  null
)(ChannelNavigationListItem);
