import React from 'react';
import { CREATE_TEAM_MODAL } from '../../../../../reducers/modal_reducer';
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
    this.props.expandCreateTeamModal();
  }

  arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
  }

  render() {

    return(
      <section className='create-team-settings settings-menu-component'>
        <li onClick={this.handleCreateTeam}>Create New Team</li>
      </section>
    );
  }

}

export default CreateTeamSettings;
