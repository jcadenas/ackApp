import React from 'react';

class CurrentTeamMemberSettings extends React.Component {

  constructor(props) {
    super(props);
    this.handleLeaveTeam = this.handleLeaveTeam.bind(this);
  }

  handleLeaveTeam(e) {
    e.stopPropagation();
    this.props.destroyMembership(this.props.currentTeam.id);
  }

  current_team_name() {
    const currentTeamName = this.props.teams[this.props.currentTeam.id].name;
    return currentTeamName;
  }

  render() {
    return (
      <li onClick={this.handleLeaveTeam}>Leave {this.current_team_name()}</li>
    );
  }

}

export default CurrentTeamMemberSettings;
