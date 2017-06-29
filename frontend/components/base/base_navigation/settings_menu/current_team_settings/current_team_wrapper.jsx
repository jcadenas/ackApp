import React from 'react';
import CurrentTeamOwnerSettingsContainer from './current_team_owner_settings_container';
import CurrentTeamMemberSettingsContainer from './current_team_member_settings_container';
import { Route } from 'react-router-dom';


class CurrentTeamWrapper extends React.Component {


  currentTeamSettings() {
    const currentUserId = this.props.current_user.id;
    const currentTeamOwnerId = this.props.currentTeam.owner_id;

    if (currentUserId === currentTeamOwnerId) {
      return (
        <CurrentTeamOwnerSettingsContainer baseCurrentTeamId={this.props.baseCurrentTeamId} />
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
        <span className='current-team-settings-header'>{this.props.currentTeam.name}</span>
        {this.currentTeamSettings()}
      </div>
    );
  }

}

export default CurrentTeamWrapper;
