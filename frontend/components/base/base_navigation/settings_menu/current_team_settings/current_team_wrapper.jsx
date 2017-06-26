import React from 'react';
import CurrentTeamOwnerSettingsContainer from './current_team_owner_settings_container';
import CurrentTeamMemberSettingsContainer from './current_team_member_settings_container';


class CurrentTeamWrapper extends React.Component {


  currentTeamSettings() {
    const currentUserId = this.props.current_user.id;
    const currentTeamId = this.props.match.params.team_id;
    const currentTeamOwnerId = this.props.teams[currentTeamId].owner_id;

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
      <div className='current-team-settings settings-menu-component'>
        <span className='current-team-settings-header'>{this.props.teams[this.props.match.params.team_id].name}</span>
        {this.currentTeamSettings()}
      </div>
    );
  }

}

export default CurrentTeamWrapper;
