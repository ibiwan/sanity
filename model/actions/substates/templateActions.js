import * as types from "../actionTypes";

export function addTemplate(data) {
  return {
    type: types.ADD_TEMPLATE,
    data: data
  };
}

export function editTemplate(data) {
  return {
    type: types.EDIT_TEMPLATE,
    data: data
  };
}

export function deleteTemplate(data) {
  return {
    type: types.DELETE_TEMPLATE,
    data: data
  };
}

export function selectDefaultExpense(data) {
  return {
    type: types.SELECT_DEFAULT_EXPENSE,
    data: data
  };
}

export function selectDefaultIncome(data) {
  return {
    type: types.SELECT_DEFAULT_INCOME,
    data: data
  };
}
