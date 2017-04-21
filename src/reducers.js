import * as types from './actionTypes';
import * as fields from './fields';

let nextId = 0;

function getFilter(field) {
  const {defaultOperator, defaultValue} = field.widget;
  return Map({field, operator: defaultOperator, value: defaultValue});
}

function addFilter(state) {
  return state.update('filters', (filters) => {
    return filters.set(++nextId, getFilter(state.get('selectedFields').first()));
  });
}

function removeFilter(state, filterId) {
  return state.deleteIn(['filters', filterId]);
}

function clearFilters(state) {
  return state.set('filters', emptyFilters);
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.ADD_FILTER:
      return addFilter(state);

    case types.REMOVE_FILTER:
      return removeFilter(state, action.filterId);

    case types.CLEAR_FILTERS:
      return clearFilters(state);

    default:
      return state;
  }
}
