import React from 'react';
import EditTeamModalContainer from '../../../modals/teams/edit_team_modal_container';
import CreateMembershipModalContainer from '../../../modals/memberships/create_membership_modal_container';
import { EDIT_TEAM_MODAL, CREATE_MEMBERSHIP_MODAL } from '../../../../../reducers/modal_reducer';

class CurrentTeamOwnerSettings extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteTeam = this.handleDeleteTeam.bind(this);
    this.handleEditTeam = this.handleEditTeam.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
  }

  handleDeleteTeam(e) {
    e.stopPropagation();
    const teamId = this.props.match.params.team_id;
    this.props.destroyTeam(teamId);
  }

  handleEditTeam(e) {
    e.stopPropagation();
    this.props.expandEditTeamModal();
  }

  handleAddUser(e) {
    e.stopPropagation();
    this.props.expandCreateMembershipModal();
  }

  // editTeamModalDisplay(){
  //   if (this.props.modals[EDIT_TEAM_MODAL]){
  //     return (
  //       <EditTeamModalContainer />
  //     );
  //   } else {
  //     return undefined;
  //   }
  // }
  //
  // createMembershipModalDisplay(){
  //   if (this.props.modals[CREATE_MEMBERSHIP_MODAL]){
  //     return (
  //       <CreateMembershipModalContainer />
  //     );
  //   } else {
  //     return undefined;
  //   }
  // }
  // {this.editTeamModalDisplay()}
  // {this.createMembershipModalDisplay()}

  render() {
    return (
      <ul className='current-team-owner-settings-list'>
        <li onClick={this.handleEditTeam}>Edit</li>
        <li onClick={this.handleDeleteTeam}>Delete</li>
        <li onClick={this.handleAddUser}>Add User</li>
      </ul>
    );
  }

}

export default CurrentTeamOwnerSettings;
