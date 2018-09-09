import * as types from "../actionTypes";

export function login(data) {
  return {
    type: types.LOG_IN,
    data: data
  };
}

export function logout(data) {
  return {
    type: types.LOG_OUT,
    data: data
  };
}

export function createUser(data) {
  return {
    type: types.CREATE_USER,
    data: data
  };
}

export function editUsername(data) {
  return {
    type: types.EDIT_USERNAME,
    data: data
  };
}

export function changePassword(data) {
  return {
    type: types.CHANGE_PASSWORD,
    data: data
  };
}
