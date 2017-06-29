import React from 'react';
import { Route } from 'react-router-dom';
import BaseNavigation from './base_navigation/base_navigation';
import BaseChannelActivity from './base_channel_activity/base_channel_activity';
import CreateTeamModalContainer from './modals/teams/create_team_modal_container';
import EditTeamModalContainer from './modals/teams/edit_team_modal_container';
import CreateMembershipModalContainer from './modals/memberships/create_membership_modal_container';
import CreateChannelModalContainer from './modals/channels/create_channel_modal_container';
import CreateSubscriptionModalContainer from './modals/subscriptions/create_subscription_modal_container';

import {
  EDIT_TEAM_MODAL,
  CREATE_TEAM_MODAL,
  CREATE_MEMBERSHIP_MODAL,
  CREATE_CHANNEL_MODAL,
  CREATE_SUBSCRIPTION_MODAL
} from '../../reducers/modal_reducer';

class Base extends React.Component {

  createTeamModalDisplay(){
    if (this.props.modals[CREATE_TEAM_MODAL]){
      return (
        <CreateTeamModalContainer />
      );
    } else {
      return undefined;
    }
  }

  editTeamModalDisplay(){
    if (this.props.modals[EDIT_TEAM_MODAL]){
      return (
        <Route path='/messages/:team_id' component={EditTeamModalContainer} />
      );
    } else {
      return undefined;
    }
  }

  createMembershipModalDisplay(){
    if (this.props.modals[CREATE_MEMBERSHIP_MODAL]){
      return (
        <Route path='/messages/:team_id' component={CreateMembershipModalContainer} />
      );
    } else {
      return undefined;
    }
  }

  createChannelModalDisplay(){
    if (this.props.modals[CREATE_CHANNEL_MODAL]){
      return (
        <Route path='/messages/:team_id/:channel_id' component={CreateChannelModalContainer} />
      );
    } else {
      return undefined;
    }
  }

  createSubscriptionModalDisplay(){
    if (this.props.modals[CREATE_SUBSCRIPTION_MODAL]){
      return (
        <Route path='/messages/:team_id/:channel_id' component={CreateSubscriptionModalContainer} />
      );
    } else {
      return undefined;
    }
  }

  componentDidMount() {
  }

  componentWillReceiveProps(newProps) {
    // if (this.props.channels[Object.keys(this.props.channels)[0]] === undefined && newProps.channels[Object.keys(newProps.channels)[0]]){
    //   newProps.history.push(`/messages/${newProps.teams[Object.keys(this.props.teams)[0]].id}/${newProps.channels[Object.keys(newProps.channels)[0]].id}`);
    // }
    //
    // if (this.props.match.params.channel_id) {
    //
    // }

  }


  render(){
    // if(this.props.baseCurrentChannelId)
    // {
    return(
      <div className='all-of-base'>
        {this.createTeamModalDisplay()}
        {this.editTeamModalDisplay()}
        {this.createMembershipModalDisplay()}
        {this.createChannelModalDisplay()}
        {this.createSubscriptionModalDisplay()}
        <BaseNavigation />
        <BaseChannelActivity />
      </div>
    );
    // } else {
    //   return <span>Base Nada</span>
    // }
  }
}

export default Base;
