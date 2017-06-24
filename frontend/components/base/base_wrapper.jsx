import React from 'react';
import { Route } from 'react-router-dom';
import Base from './base';

class BaseWrapper extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchUserTeams();
  }

  // TODO this will break once we have click to navigate teams
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
        <Route path={`/messages/${firstTeam.id}`} component={Base} />
      );
    } else {
      return (
        <div>Nada.</div>
      );
    }
  }
}


export default BaseWrapper;
