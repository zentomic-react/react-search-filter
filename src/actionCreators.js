import * as types from './actionTypes';

export function addFilter() {
  return {type: types.ADD_FILTER};
}

export function removeFilter(filterId) {
  return {type: types.REMOVE_FILTER, filterId};
}

export function clearFilters() {
  return {type: types.CLEAR_FILTERS};
}