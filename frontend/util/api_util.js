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

export const destroyMembership = (membership_id) => {
  return $.ajax({
    type: 'DELETE',
    url: `/api/memberships/${membership_id}`
  });
};



















// Bottom Of File
