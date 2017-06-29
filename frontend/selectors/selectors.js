// Channels of User

export const userTeamChannels = (state, ownProps) => {
  if(state.teams.entities[ownProps.match.params.team_id]){
    const teamChannelsById = state.teams.entities[ownProps.match.params.team_id].channels_by_id;
    const userChannels = state.session.current_user.channels_by_id;
    const userTeamChannels = teamChannelsById.filter((x) => userChannels.includes(parseInt(x)));
    return userTeamChannels;
  } else {
    return ['userTeamChannels_failed']
  }
};

export const nonUserTeamChannels = (state, ownProps) => {
  // THIS IS INCORRECT

  if(state.teams.entities[ownProps.match.params.team_id]){
    const teamChannelsById = state.teams.entities[ownProps.match.params.team_id].channels_by_id;
    const userChannels = state.session.current_user.channels_by_id;
    const nonUserTeamChannelsArr = teamChannelsById.filter((x) => !userChannels.includes(parseInt(x)));
    return nonUserTeamChannelsArr;
} else {
  return ['nonUserTeamChannels_failed']
}
};

export const firstTeam = (state) => {
  return state.teams.entities[Object.keys(state.teams.entities)[0]];
};

export const firstChannel = (state) => {
  return state.channels.entities[Object.keys(state.channels.entities)[0]];
};

export const currentTeam = (state, ownProps) => {
  return state.teams.entities[ownProps.match.params.team_id]
};
