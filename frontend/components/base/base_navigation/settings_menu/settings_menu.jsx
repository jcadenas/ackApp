import React from 'react';
import { Route } from 'react-router-dom';
import SettingsDropDownContainer from './settings_drop_down_container';
import SettingsMenuHeader from './settings_menu_header';


class SettingsMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.expandDropDown = this.expandDropDown.bind(this);
    this.collapseDropDown = this.collapseDropDown.bind(this);
  }

  currentTeam() {
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    this.collapseDropDown();
  }

  componentWillReceiveProps(newProps) {
    this.collapseDropDown();
    if (Object.keys(this.props.teams).length > Object.keys(newProps.teams).length){
      newProps.history.push(`/messages/${newProps.teams[Object.keys(newProps.teams)[0]].id}`);
    }
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

  dropDownMenu () {
    if(this.state.expanded){
      return (
        <div>
          <SettingsDropDownContainer baseCurrentTeamId={this.props.match.params.team_id}/>
          <div className='clear-drop-down-layer' onClick={this.collapseDropDown}></div>
        </div>
      );
    } else {
      return undefined;
    }
  }


  render() {
    if(this.props.teams[this.props.match.params.team_id]) {
      return(
        <section className='settings-menu' onClick={this.expandDropDown}>
          <span className='settings-menu-header'>
            <span>{this.props.teams[this.props.match.params.team_id].name}</span><i className="fa fa-angle-down" aria-hidden="true"></i>
          </span>
          <span className='settings-menu-username'>
            <i className="fa fa-circle" aria-hidden="true"></i><span>{this.props.current_user.username}</span>
          </span>
          {this.dropDownMenu()}
        </section>
      );
    } else {
      return(
        <section className='settings-menu'>
          <span className='settings-menu-header'>
            <span>Loading...</span><i className="fa fa-angle-down" aria-hidden="true"></i>
          </span>
          <span className='settings-menu-username'>
            <i className="fa fa-circle" aria-hidden="true"></i><span>...</span>
          </span>
        </section>
      );
    }
  }


}

export default SettingsMenu;
