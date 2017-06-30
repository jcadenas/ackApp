// USER API -----------------------------

// TODO: Likely need to change how I'm passing user
export const createUser = (user) => {
  return $.ajax({
    type: 'POST',
    url: '/api/users',
    data: { user }
  });
};

// TODO: Likely need to change how I'm passing user
export const createSession = (user) => {
  return $.ajax({
    type: 'POST',
    url: '/api/session',
    data: { user }
  });
};

export const destroySession = () => {
  return $.ajax({
    type: 'DELETE',
    url: '/api/session'
  });
};



// TEAM API -----------------------------

export const createTeam = (team) => {
  return $.ajax({
    type: 'POST',
    url: '/api/teams',
    data: { team }
  });
};

export const destroyTeam = (team_id) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/teams/${team_id}`
  });
};

export const fetchOneTeam = (team_id) => {
  return $.ajax({
    url: `/api/teams/${team_id}`
  });
};

export const fetchUserTeams = () => {
  return $.ajax({
    url: '/api/teams'
  });
};

export const updateOneTeam = (team) => {
  return $.ajax({
    type: 'PATCH',
    url: `/api/teams/${team.id}`,
    data: { team }
  });
};



// MEMBERSHIP API -----------------------------

export const createMembership = (membership) => {
  return $.ajax({
    type: 'POST',
    url: '/api/memberships',
    data: { membership }
  });
};

export const destroyMembership = (team_id) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/memberships/${team_id}`
  });
};

// CHANNELS API -----------------------------

export const createChannel = (channel) => {
  return $.ajax({
    type: 'POST',
    url: '/api/channels',
    data: { channel }
  });
};

export const destroyChannel = (channel_id) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/channels/${channel_id}`
  });
};

export const fetchTeamChannels = (team_id) => {
  return $.ajax({
    url: `/api/teams/${team_id}/channels`
  });
};

export const fetchOneChannel = (channel_id) => {
  return $.ajax({
    url: `/api/channels/${channel_id}`
  });
};

export const updateOneChannel = (channel) => {
  return $.ajax({
    type: 'PATCH',
    url: `/api/channels/${channel.id}`,
    data: { channel }
  });
};

// SUBSCRIPTIONS API -----------------------------

export const createSubscription = (subscription) => {
  return $.ajax({
    type: 'POST',
    url: '/api/subscriptions',
    data: { subscription }
  });
};

export const destroySubscription = (channel_id) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/subscriptions/${channel_id}`
  });
};


// MESSAGES API -----------------------------

export const createMessage = (message) => {
  return $.ajax({
    type: 'POST',
    url: '/api/messages',
    data: { message }
  });
};

export const fetchChannelMessages = (channel_id) => {
  return $.ajax({
    url: `/api/channels/${channel_id}/messages`
  });
};










// Bottom Of File
