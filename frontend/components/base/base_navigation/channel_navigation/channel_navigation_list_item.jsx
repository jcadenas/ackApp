import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';


class ChannelNavigationListItem extends React.Component {

  isSelected(channelId){
    if (channelId === parseInt(this.props.currentChannelId)){
      return 'channel-nav-list-item-selected';
    } else {
      return 'channel-nav-list-item-unselected';
    }
  }

  render(){
    if (this.props.channels[this.props.listChannelId]) {
      return(
        <Link to={`/messages/${this.props.teamId}/${this.props.listChannelId}`}>
          <li className={`${this.isSelected(this.props.listChannelId)}`}>
              <span className='channel-nav-hash'>#</span>
              <span className='switch-to-channel'>{this.props.channels[this.props.listChannelId].name}</span>
          </li>
        </Link>
      );
    } else {
      return(
        <li className='channel-nav-list-item-loader'>
        </li>
      );

    }
  }

}

const mapStateToProps = (state, ownProps) => {
  return ({
    channels: state.channels.entities,
    currentChannelId: ownProps.baseCurrentChannelId,
    listChannelId: ownProps.listChannelId,
    teamId: ownProps.teamId
  })
}

export default connect(
  mapStateToProps,
  null
)(ChannelNavigationListItem);
