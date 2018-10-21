import initialState from '../initialState';
import type {Entry} from "../initialState";

import {
  ADD_ENTRY,
  EDIT_ENTRY,
  DELETE_ENTRY,
  ENTRY_EDIT_MODE_ALL_ENTRIES,
  ENTRY_EDIT_MODE_CURRENT_ENTRY_ONLY,
  ENTRY_EDIT_MODE_CURRENT_AND_FUTURE_ENTRIES
} from "../../actions/actionTypes";

const x:Entry = 3;

export default function entries<T>(
  entries: Array<T> = initialState.entries,
  action
): Array<T> {
  switch (action.type) {
    case ADD_ENTRY: 
      const entry = action.data;
      return [...entries, entry];
    case EDIT_ENTRY: 
      return entriesWithChange(entries, action.data);
    case DELETE_ENTRY: 
      return entriesWithout(entries, action.data);
    default: 
      return entries;
  }
}

function entriesWithChange(entries, { id, mode, change }) {
  const targetEntries = getTargets(entries, id, mode);
  return entries.map(
    entry => 
      targetEntries.includes(entry.id) ? { ...entry, ...change }: entry
  );
}

function entriesWithout(entries, { id, mode }) {
  const targetEntries = getTargets(entries, id, mode);
  return entries.filter(entry => !targetEntries.includes(entry.id));
}

function getTargets(entries, id, mode) {
  const currentEntry = entries.find(entry => entry.id === id);
  const { seriesId } = currentEntry;

  switch (mode) {
    case ENTRY_EDIT_MODE_ALL_ENTRIES: 
      return entries
        .filter(entry => entry.seriesId === seriesId)
        .map(entry => entry.id);
      break;
    case ENTRY_EDIT_MODE_CURRENT_AND_FUTURE_ENTRIES: 
      return entries
        .filter(entry => entry.seriesId === seriesId && entry.id >= id)
        .map(entry => entry.id);
      break;
    case ENTRY_EDIT_MODE_CURRENT_ENTRY_ONLY: 
      return [id];
      break;
  }
}
