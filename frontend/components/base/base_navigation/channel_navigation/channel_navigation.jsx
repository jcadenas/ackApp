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
    if (!this.props.baseCurrentChannelId) {
      const currentTeamId = this.props.match.params.team_id;
      this.props.fetchTeamChannels(currentTeamId);
    }
  }

  componentWillReceiveProps(newProps){
    let oldChannels = this.props.teamChannels;
    let newChannels = newProps.teamChannels;
    if (this.props.teamChannels[Object.keys(newProps.teamChannels)[0]] === undefined && newProps.teamChannels[Object.keys(newProps.teamChannels)[0]] !== undefined) {
      newProps.history.push(`/messages/${this.props.match.params.team_id}/${newProps.teamChannels[Object.keys(newProps.teamChannels)[0]].id}`)
    };
  }

  isSelected(channelId){
    if (channelId === this.props.baseCurrentChannelId){
      return 'channel-nav-list-item-selected';
    } else {
      return '';
    }
  }

  listItems () {
    if (this.props.baseCurrentChannelId){
      const switchChannels = [];
      this.props.userTeamChannels.forEach((channelId) => {
        switchChannels.push(
          <li key={`${this.props.currentChannelId}`} className={`${this.isSelected(channelId)}`}>
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
