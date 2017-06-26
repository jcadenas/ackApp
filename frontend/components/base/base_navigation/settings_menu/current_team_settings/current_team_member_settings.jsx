import React from 'react';

class CurrentTeamMemberSettings extends React.Component {

  constructor(props) {
    super(props);
    this.handleLeaveTeam = this.handleLeaveTeam.bind(this);
  }

  handleLeaveTeam(e) {
    e.stopPropagation();
    this.props.destroyMembership(this.props.match.params.team_id);
  }

  current_team_name() {
    const currentTeamName = this.props.state.teams.entities[this.props.match.params.team_id].name;
    return currentTeamName;
  }

  render() {
    return (
      <span onClick={this.handleLeaveTeam}>Leave {this.current_team_name()}</span>
    );
  }

}

export default CurrentTeamMemberSettings;
