import * as types from "../actionTypes";

export function setLedgerSorting(data) {
  return {
    type: types.SET_LEDGER_SORTING,
    data: data
  };
}

export function extendToDate(data) {
  return {
    type: types.EXTEND_TO_DATE,
    data: data
  };
}

export function extendToIteration(data) {
  return {
    type: types.EXTEND_TO_ITERATION,
    data: data
  };
}
