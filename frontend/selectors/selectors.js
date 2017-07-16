// Channels of User

export const userTeamChannels = (state, ownProps) => {
  if(state.teams.entities[ownProps.match.params.team_id]){
    const teamChannelsById = state.teams.entities[ownProps.match.params.team_id].channels_by_id;
    const userChannels = state.session.current_user.channels_by_id;
    const userTeamChannelsArr = teamChannelsById.filter((x) => userChannels.includes(parseInt(x)));
    return userTeamChannelsArr;
  } else {
    return ['userTeamChannels_failed'];
  }
};

// None of this works at the moment
// This was for how to handle sorting channels in the channel navigation list
// export const userTeamChannelsByChannelObject = (state, ownProps) => {
//   if(state.teams.entities[ownProps.match.params.team_id]){
//     const teamChannelsById = state.teams.entities[ownProps.match.params.team_id].channels_by_id;
//     const userChannels = state.session.current_user.channels_by_id;
//     const userTeamChannelsArr = teamChannelsById.filter((x) => userChannels.includes(parseInt(x)));
//     return userTeamChannelsArr;
//   } else {
//     return ['userTeamChannels_failed'];
//   }
// };

export const currentChannel = (state, channel_id) => {
  debugger;
  return state.channels.entities[channel_id]
}

export const channelMessages = (state, ownProps) => {
  if (Object.keys(state.messages.entities)[0]) {

    let channelMessagesArr = [];
    for (let key in state.messages.entities){
      if (state.messages.entities[key].channel_id === parseInt(ownProps.currentChannelId)) {
        channelMessagesArr.push(state.messages.entities[key]);
      }
    }
    return channelMessagesArr
  } else {
    return undefined;
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
  return ['nonUserTeamChannels_failed'];
}
};

export const firstTeam = (state) => {
  return state.teams.entities[Object.keys(state.teams.entities)[0]];
};

export const firstChannel = (state) => {
  return state.channels.entities[Object.keys(state.channels.entities)[0]];
};

export const currentTeam = (state, ownProps) => {
  return state.teams.entities[ownProps.match.params.team_id];
};
