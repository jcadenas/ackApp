import React from 'react';
import { Link } from 'react-router-dom';

class SwitchTeams extends React.Component {


  listItems () {
    const switchTeams = [];
    for (var key in this.props.teams) {
      if (parseInt(key) !== this.props.currentTeam.id) {
        switchTeams.push(
          <li key={`${key}`}><Link to={`/messages/${key}`}>Switch to <span className='switch-to-team'>{this.props.teams[key].name}</span></Link></li>
        );
      }
    }



    return switchTeams;
  }

  render() {
    if (this.listItems().length > 0){
      return (
        <ul className='settings-menu-component switch-teams-list'>
          {this.listItems()}
        </ul>
      );
    } else {
      return (
        <ul></ul>
      )
    }
  }

}

export default SwitchTeams;
