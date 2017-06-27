import React from 'react';
import BaseNavigation from './base_navigation/base_navigation';
import BaseChannelActivity from './base_channel_activity/base_channel_activity';
import CreateTeamModalContainer from './modals/teams/create_team_modal_container';
import EditTeamModalContainer from './modals/teams/edit_team_modal_container';
import CreateMembershipModalContainer from './modals/memberships/create_membership_modal_container';
import {
  EDIT_TEAM_MODAL,
  CREATE_TEAM_MODAL,
  CREATE_MEMBERSHIP_MODAL
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
        <EditTeamModalContainer />
      );
    } else {
      return undefined;
    }
  }

  createMembershipModalDisplay(){
    if (this.props.modals[CREATE_MEMBERSHIP_MODAL]){
      return (
        <CreateMembershipModalContainer />
      );
    } else {
      return undefined;
    }
  }


  render(){
    return(
      <div className='all-of-base'>
        {this.createTeamModalDisplay()}
        {this.editTeamModalDisplay()}
        {this.createMembershipModalDisplay()}
        <BaseNavigation />
        <BaseChannelActivity />
      </div>
    );
  }
}

export default Base;
