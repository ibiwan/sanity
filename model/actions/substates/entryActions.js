import { ADD_ENTRY, EDIT_ENTRY, DELETE_ENTRY } from "../actionTypes";

export function addEntry(data) {
  return {
    type: ADD_ENTRY,
    data: data
  };
}

export function editEntry(id, mode, data) {
  return {
    type: EDIT_ENTRY,
    data: { id, mode, data }
  };
}

export function deleteEntry(id, mode) {
  return {
    type: DELETE_ENTRY,
    data: { id, mode }
  };
}
