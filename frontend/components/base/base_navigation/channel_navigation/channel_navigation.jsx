import React from 'react';
import { Link, Route } from 'react-router-dom';
import ChannelNavigationHeaderContainer from './channel_navigation_header_container';
import ChannelNavigationList from './channel_navigation_list';
import * as _ from 'lodash';

class ChannelNavigation extends React.Component {

  componentDidMount() {
    // debugger;
    if (Object.keys(this.props.channels).length < 1) {
      this.props.fetchTeamChannels(this.props.match.params.team_id);
    } else {
      this.props.history.push(`/messages/${this.props.match.params.team_id}/${this.props.teams[this.props.match.params.team_id].channels_by_id[0]}`);
    }
  }

  componentWillReceiveProps(newProps){
    // debugger;

    // Handle initial fetch of Channels (no channels to some channels)
    if (Object.keys(this.props.channels).length < 1 && Object.keys(newProps.channels).length > 0){
      newProps.history.push(`/messages/${this.props.match.params.team_id}/${newProps.teams[this.props.match.params.team_id].channels_by_id[0]}`);
    }
    debugger;
    // Handle leaving a channel
    // Goal: Update URL with an appropriate new channel id.
    // cannot rely on channel missing from channels as it should stay. What it should do, is check the user's channels_by_id to see if
    // the matched param is in it, if not, grab the first one in the user's channels_by_id thing.
    // JK NOPE. It has to go to the teams because channels is all teams channels...if moving between teams

    // if (!newProps.userTeamChannels.includes(newProps.match.params.channel_id) && newProps.userTeamChannels.length > 0 && newProps.match.params.channel_id) {
    //   debugger;
    //   newProps.history.push(`/messages/${newProps.match.params.team_id}/${newProps.userTeamChannels[0]}`);
    // }


    // if (Object.keys(newProps.channels).length > 0 && newProps.match.params.channel_id && !newProps.channels[newProps.match.params.channel_id]){
    //   newProps.history.push(`/messages/${this.props.match.params.team_id}/${newProps.teams[this.props.match.params.team_id].channels_by_id[0]}`);
    // }

    // Handle receiving channels from new team fetch
    if (this.props.match.params.team_id !== newProps.match.params.team_id){
      newProps.history.push(`/messages/${newProps.match.params.team_id}/${newProps.teams[newProps.match.params.team_id].channels_by_id[0]}`);
    }

    // Handle navigating to new team & not having its channels
    if (newProps.channels[Object.keys(newProps.channels)[0]] !== undefined && newProps.channels[newProps.teams[newProps.match.params.team_id].channels_by_id[0]] === undefined){
      newProps.fetchTeamChannels(parseInt(newProps.match.params.team_id));
    }

  }

  render() {
    debugger;
    return (
      <section className='channel-navigation'>
        <ChannelNavigationHeaderContainer />
        <Route path='/messages/:team_id/:channel_id' component={ChannelNavigationList} />
      </section>
    );
  }

}


export default ChannelNavigation;
