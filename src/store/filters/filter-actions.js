export const NEW_FILTER = "NEW_FILTER";
export const IN_PROGRESS_FILTER = "IN_PROGRESS_FILTER";
export const DONE_FILTER = "DONE_FILTER";

export const changeNewFilter = (status) => ({
  type: NEW_FILTER,
  status,
});

export const changeInProgressFilter = (status) => ({
  type: IN_PROGRESS_FILTER,
  status,
});

export const changeDoneFilter = (status) => ({
  type: DONE_FILTER,
  status,
});
