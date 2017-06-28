import React from 'react';
import { Link } from 'react-router-dom';

class SwitchTeams extends React.Component {


  listItems () {
    const switchTeams = [];
    for (let key in this.props.teams) {
      if (key !== this.props.baseCurrentTeamId) {
        switchTeams.push(
          <li key={`${key}`}><Link to={`/messages/${key}`}>Switch to <span className='switch-to-team'>{this.props.teams[key].name}</span></Link></li>
        );
      }
    }
    return switchTeams;
  }

  render() {
    return (
      <ul className='settings-menu-component switch-teams-list'>
        {this.listItems()}
      </ul>
    );
  }

}

export default SwitchTeams;
