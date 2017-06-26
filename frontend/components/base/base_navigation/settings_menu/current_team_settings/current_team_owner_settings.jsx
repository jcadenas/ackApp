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

  editTeamModalDisplay(){
    if (this.props.state.modals[EDIT_TEAM_MODAL]){
      return (
        <EditTeamModalContainer />
      );
    } else {
      return undefined;
    }
  }

  createMembershipModalDisplay(){
    if (this.props.state.modals[CREATE_MEMBERSHIP_MODAL]){
      return (
        <CreateMembershipModalContainer />
      );
    } else {
      return undefined;
    }
  }

  render() {
    return (
      <section>
        <span onClick={this.handleEditTeam}>Edit</span>
        {this.editTeamModalDisplay()}
        <span onClick={this.handleDeleteTeam}>Delete</span>
        <span onClick={this.handleAddUser}>Add User</span>
        {this.createMembershipModalDisplay()}

      </section>
    );
  }

}

export default CurrentTeamOwnerSettings;
