import React from 'react';

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
    e.stopPropagation();
    this.setState({ expanded: false });
  }



  dropDownMenu () {
    if(this.state.expanded){
      return (
        <div>
          <div className='settings-drop-down'>
            Hello from the drop down!
          </div>
          <div className='clear-drop-down-layer' onClick={this.collapseDropDown}></div>
        </div>
      );
    } else {
      return undefined;
    }
  }


  render() {
    console.log('rendering!');
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
