import * as types from "../actionTypes";

export function addEntry(data) {
  return {
    type: types.ADD_ENTRY,
    data: data
  };
}

export function editEntry(id, mode, data) {
  return {
    type: types.EDIT_ENTRY,
    data: {
      id: id,
      mode: mode,
      data: data
    }
  };
}

export function deleteEntry(id, mode) {
  return {
    type: types.DELETE_ENTRY,
    data: {
      id: id,
      mode: mode
    }
  };
}
