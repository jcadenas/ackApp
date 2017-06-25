import React from 'react';
import UserSettingsContainer from './user_settings_container';
import CurrentTeamWrapperContainer from './current_team_settings/current_team_wrapper_container';
import SwitchTeamsContainer from './switch_teams/switch_teams_container';
// import CreateTeamContainer from './create_team_container';

class SettingsDropDown extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <section className='settings-drop-down'>
        <UserSettingsContainer />
        <CurrentTeamWrapperContainer />
        <SwitchTeamsContainer />
      </section>
    );
  }

}

export default SettingsDropDown;


// <CreateTeamContainer />
