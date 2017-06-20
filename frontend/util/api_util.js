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
