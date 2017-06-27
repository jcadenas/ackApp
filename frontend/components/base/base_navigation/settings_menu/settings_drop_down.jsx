import React from 'react';
import UserSettingsContainer from './user_settings/user_settings_container';
import CurrentTeamWrapperContainer from './current_team_settings/current_team_wrapper_container';
import SwitchTeamsContainer from './switch_teams/switch_teams_container';
import CreateTeamSettingsContainer from './create_team_settings/create_team_settings_container';

class SettingsDropDown extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
  }

  render() {
    return(
      <section className='settings-drop-down'>
        <UserSettingsContainer />
        <CurrentTeamWrapperContainer />
        <SwitchTeamsContainer />
        <CreateTeamSettingsContainer />
      </section>
    );
  }

}

export default SettingsDropDown;
