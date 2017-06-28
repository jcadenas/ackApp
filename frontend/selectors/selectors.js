// Channels of User

export const userTeamChannels = (state, ownProps) => {
  const teamChannelsById = Object.keys(state.teams.entities);
  const userChannels = state.session.current_user.channels_by_id;
  const userTeamChannels = teamChannelsById.filter((x) => userChannels.includes(parseInt(x)));
  return userTeamChannels;
}

export const nonUserTeamChannels = (state, ownProps) => {
  const teamChannelsById = Object.keys(state.teams.entities);
  const userChannels = state.session.current_user.channels_by_id;
  const userTeamChannels = teamChannelsById.filter((x) => !userChannels.includes(parseInt(x)));
  return userTeamChannels;
}

export const firstTeamId = (state, ownProps) => {

}

export const firstChannelId = (state, ownProps) => {
  
}
