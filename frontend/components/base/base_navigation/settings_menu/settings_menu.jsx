import React from 'react';
import SettingsDropDownContainer from './settings_drop_down_container';

class SettingsMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.expandDropDown = this.expandDropDown.bind(this);
    this.collapseDropDown = this.collapseDropDown.bind(this);
  }

  currentTeam() {
    const currenTeamId = this.props.match.params.team_id;
    const currentTeam = this.props.state.teams.entities[currenTeamId];
    return currentTeam;
  }

  currentUser() {
    return this.props.state.session.current_user;
  }

  expandDropDown(e) {
    this.setState({ expanded: true });
  }

  collapseDropDown(e) {
    // Checks e because we also call this function on willreceive props in order to
    // reset drop down when navigating to a new team.
    if (e) {
      e.stopPropagation();
    }
    this.setState({ expanded: false });

  }

  componentWillReceiveProps(newProps) {
    if(newProps.match.params.team_id !== this.props.match.params.team_id) {
      this.collapseDropDown();
    }
  }

  dropDownMenu () {
    if(this.state.expanded){
      return (
        <div>
          <SettingsDropDownContainer />
          <div className='clear-drop-down-layer' onClick={this.collapseDropDown}></div>
        </div>
      );
    } else {
      return undefined;
    }
  }


  render() {
    return(
      <section className='settings-menu' onClick={this.expandDropDown}>
        <span className='settings-menu-header'>
          {this.currentTeam().name}
        </span>
        <span className='settings-menu-username'>
          {this.currentUser().username}
        </span>
        {this.dropDownMenu()}
      </section>
    );
  }


}


export default SettingsMenu;
