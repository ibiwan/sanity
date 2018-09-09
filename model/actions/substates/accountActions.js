import * as types from "../actionTypes";

export function addAccount(data) {
  return {
    type: types.ADD_ACCOUNT,
    data: data
  };
}

export function renameAccount(id, mode, data) {
  return {
    type: types.RENAME_ACCOUNT,
    data: {
      id: id,
      mode: mode,
      data: data
    }
  };
}

export function deleteUnusedAccount(id, mode) {
  return {
    type: types.DELETE_UNUSED_ACCOUNT,
    data: {
      id: id,
      mode: mode
    }
  };
}
