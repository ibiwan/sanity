import * as types from "../actionTypes";

export function setListSorting(data) {
  return {
    type: types.SET_LIST_SORTING,
    data: data
  };
}
