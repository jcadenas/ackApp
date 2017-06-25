import React from 'react';
import CurrentTeamOwnerSettingsContainer from './current_team_owner_settings_container';
import CurrentTeamMemberSettingsContainer from './current_team_member_settings_container';


class CurrentTeamWrapper extends React.Component {


  currentTeamSettings() {
    const currentUserId = this.props.state.session.current_user.id;
    const currentTeamId = this.props.match.params.team_id;
    const currentTeamOwnerId = this.props.state.teams.entities[currentTeamId].owner_id;

    if (currentUserId === currentTeamOwnerId) {
      return (
        <CurrentTeamOwnerSettingsContainer />
      );
    } else {
      return (
        <CurrentTeamMemberSettingsContainer />
      );
    }
  }

  render () {
    return (
      <div>
        {this.currentTeamSettings()}
      </div>
    );
  }

}

export default CurrentTeamWrapper;
