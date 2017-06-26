import React from 'react';
import { Link } from 'react-router-dom';

class SwitchTeams extends React.Component {


  listItems () {
    const switchTeams = [];
    for (let key in this.props.teams) {
      if (key !== this.props.match.params.team_id) {
        switchTeams.push(
          <li key={`${key}`}><Link to={`/messages/${key}`}>Switch to {this.props.teams[key].name}</Link></li>
        );
      }
    }
    return switchTeams;
  }

  render() {
    return (
      <ul>
        {this.listItems()}
      </ul>
    );
  }

}

export default SwitchTeams;
