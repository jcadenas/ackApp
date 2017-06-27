import React from 'react';
import { Route } from 'react-router-dom';
import BaseContainer from './base_container';

class BaseWrapper extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchUserTeams();
  }

  // TODO will this break once we have click to navigate teams?
  componentWillReceiveProps(newProps){
    let oldTeams = this.props.state.teams.entities;
    let newTeams = newProps.state.teams.entities;
    const oldFirstTeam = oldTeams[Object.keys(oldTeams)[0]];
    const newFirstTeam = newTeams[Object.keys(newTeams)[0]];
    if (oldFirstTeam !== newFirstTeam) {
      this.props.history.push(`/messages/${newFirstTeam.id}`);
    }
  }

  componentWillMount(){
  }

  render (){
    let teams = this.props.state.teams.entities;
    const firstTeam = teams[Object.keys(teams)[0]];
    if (firstTeam) {
      return (
        <Route path={'/messages/:team_id'} component={BaseContainer} />
      );
    } else {
      return (
        <div>Nada.</div>
      );
    }
  }
}


export default BaseWrapper;
