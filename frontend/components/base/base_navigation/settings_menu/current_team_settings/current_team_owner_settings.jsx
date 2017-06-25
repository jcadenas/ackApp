import React from 'react';

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
    this.props.editTeamToggle();
  }

  render() {
    return (
      <section>
        <span onClick={this.handleEditTeam}>Edit</span>
        <span onClick={this.handleDeleteTeam}>Delete</span>
      </section>
    );
  }

}

export default CurrentTeamOwnerSettings;
