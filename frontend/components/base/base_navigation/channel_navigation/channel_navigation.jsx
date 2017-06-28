import React from 'react';
import { Link, Route } from 'react-router-dom';
import ChannelNavigationHeaderContainer from './channel_navigation_header_container';

class ChannelNavigation extends React.Component {

  constructor(props) {
    super(props);
  }

  currentTeam() {
  }

  componentWillReceiveProps(newProps) {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(newProps){
  }

  isSelected(channelId){
    if (channelId === this.props.baseCurrentChannelId){
      return 'channel-nav-list-item-selected';
    } else {
      return 'channel-nav-list-item-unselected';
    }
  }

  listItems () {
    if (this.props.baseCurrentChannelId){
      const switchChannels = [];
      this.props.userTeamChannels.forEach((channelId) => {
        switchChannels.push(
          <li key={channelId} className={`${this.isSelected(channelId)}`}>
            <Link to={`/messages/${this.props.baseCurrentTeamId}/${channelId}`}>
              <span className='channel-nav-hash'>#</span>
              <span className='switch-to-channel'>{this.props.teamChannels[channelId].name}</span>
            </Link>
          </li>
        );
      });
      return switchChannels;
    } else {
      return undefined
    }
  }

  render() {

    return (
      <section className='channel-navigation'>
        <ChannelNavigationHeaderContainer />
        <ul className='channel-navigation-list'>
          {this.listItems()}
        </ul>
      </section>
    );
  }

}


export default ChannelNavigation;
