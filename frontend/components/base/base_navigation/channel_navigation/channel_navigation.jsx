import React from 'react';
import { Link, Route } from 'react-router-dom';
import ChannelNavigationHeaderContainer from './channel_navigation_header_container';
// import ChannelNavigationListItemAbstraction from './channel_navigation_list_item_abstraction';
import ChannelNavigationList from './channel_navigation_list';

class ChannelNavigation extends React.Component {

  constructor(props) {
    super(props);
  }

  currentTeam() {
  }

  componentWillReceiveProps(newProps) {
  }

  componentDidMount() {
    if(!this.props.teamChannels[Object.keys(this.props.teamChannels)[0]]){
      this.props.fetchTeamChannels(this.props.match.params.team_id);
    }
  }

  componentWillReceiveProps(newProps){
    if (this.props.teamChannels[Object.keys(this.props.teamChannels)[0]] === undefined && newProps.teamChannels[Object.keys(newProps.teamChannels)[0]] !== undefined){
      newProps.history.push(`/messages/${this.props.match.params.team_id}/${newProps.teamChannels[Object.keys(newProps.teamChannels)[0]].id}`);
    }
  }



  // listItems () {
  //   if (this.props.teamChannels[Object.keys(this.props.teamChannels)[0]]){
  //     const switchChannels = [];
  //     this.props.userTeamChannels.forEach((channelId) => {
  //       switchChannels.push(
  //         <Route path='/messages/:team_id/:channel_id' component={ChannelNavigationListItemAbstraction} />
  //       );
  //     });
  //     return switchChannels;
  //   } else {
  //     return undefined;
  //   }
  // }

  render() {

    return (
      <section className='channel-navigation'>
        <ChannelNavigationHeaderContainer />
        <Route path='/messages/:team_id/:channel_id' component={ChannelNavigationList} />
      </section>
    );
  }

}


export default ChannelNavigation;
