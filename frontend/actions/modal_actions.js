
// REDUCER CONSTANTS -----------------------------

export const EXPAND_EDIT_TEAM_MODAL = 'EXPAND_EDIT_TEAM_MODAL';
export const COLLAPSE_EDIT_TEAM_MODAL = 'COLLAPSE_EDIT_TEAM_MODAL';
export const EXPAND_CREATE_TEAM_MODAL = 'EXPAND_CREATE_TEAM_MODAL';
export const COLLAPSE_CREATE_TEAM_MODAL = 'COLLAPSE_CREATE_TEAM_MODAL';



// OBJECT ACTION CREATORS -----------------------------

export const expandEditTeamModal = () => {
  return ({
    type: EXPAND_EDIT_TEAM_MODAL
  });
};

export const collapseEditTeamModal = () => {
  return ({
    type: COLLAPSE_EDIT_TEAM_MODAL
  });
};

export const expandCreateTeamModal = () => {
  return ({
    type: EXPAND_CREATE_TEAM_MODAL
  });
};

export const collapseCreateTeamModal = () => {
  return ({
    type: COLLAPSE_CREATE_TEAM_MODAL
  });
};




// ASYNC ACTION CREATORS -----------------------------



// Bottom of File
