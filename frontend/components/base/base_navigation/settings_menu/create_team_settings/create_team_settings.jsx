import React from 'react';
import { CREATE_TEAM_TOGGLE } from '../../../../../actions/modal_actions';
import CreateTeamModalContainer from '../../../modals/teams/create_team_modal_container';

class CreateTeamSettings extends React.Component {

  constructor(props) {
    super(props);
    this.handleCreateTeam = this.handleCreateTeam.bind(this);
  }

  handleCreateTeam(e) {
    if (e) {
      e.stopPropagation();
    }
    this.props.createTeamToggle();
  }

  componentWillReceiveProps(newProps) {
    // On successful create of team, close create team toggle
    const newTeams = newProps.state.teams.entities;
    const oldTeams = this.props.state.teams.entities;
    if (newTeams !== oldTeams && this.props.state.modals[CREATE_TEAM_TOGGLE] === true){
      this.props.createTeamToggle();
    }
  }

  createTeamModalDisplay() {
    if (this.props.state.modals[CREATE_TEAM_TOGGLE]){
      return (
        <CreateTeamModalContainer />
      );
    } else {
      return undefined;
    }
  }


  // TODO add conditional rendering of Create Team modal
  render() {

    return(
      <section>
        <span onClick={this.handleCreateTeam}>Create New Team</span>
        {this.createTeamModalDisplay()}
      </section>
    );
  }

}

export default CreateTeamSettings;
