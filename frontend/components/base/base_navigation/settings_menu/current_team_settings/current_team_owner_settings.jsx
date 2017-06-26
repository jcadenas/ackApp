import React from 'react';
import EditTeamModalContainer from '../../../modals/teams/edit_team_modal_container';
import { EDIT_TEAM_MODAL } from '../../../../../reducers/modal_reducer';

class CurrentTeamOwnerSettings extends React.Component {

  constructor(props) {
    super(props);
    this.handleDeleteTeam = this.handleDeleteTeam.bind(this);
    this.handleEditTeam = this.handleEditTeam.bind(this);
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

  editTeamModalDisplay(){
    if (this.props.state.modals[EDIT_TEAM_MODAL]){
      return (
        <EditTeamModalContainer />
      );
    } else {
      return undefined;
    }
  }

  render() {
    return (
      <section>
        <span onClick={this.handleEditTeam}>Edit</span>
        <span onClick={this.handleDeleteTeam}>Delete</span>
        {this.editTeamModalDisplay()}
      </section>
    );
  }

}

export default CurrentTeamOwnerSettings;
