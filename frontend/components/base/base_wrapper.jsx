import React from 'react';
import { Route } from 'react-router-dom';
import BaseContainer from './base_container';
import * as _ from 'lodash';

class BaseWrapper extends React.Component {

  constructor (props) {
    super(props);
  }

  componentDidMount(){
    if (!Boolean(this.props.teams.first)){
      this.props.fetchUserTeams();
    } else {
      this.props.history.push(`/messages/${newFirstTeam.id}`);
    }
  }

  // TODO will this break once we have click to navigate teams?
  componentWillReceiveProps(newProps){
    let oldTeams = this.props.teams;
    let newTeams = newProps.teams;
    const oldFirstTeam = oldTeams[Object.keys(oldTeams)[0]];
    const newFirstTeam = newTeams[Object.keys(newTeams)[0]];
    if (oldFirstTeam === undefined
      || Object.keys(oldTeams).length > Object.keys(newTeams).length) {
      this.props.history.push(`/messages/${newFirstTeam.id}`);
    }
  }

  componentWillMount(){
  }

  render (){
    let teams = this.props.teams;
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
