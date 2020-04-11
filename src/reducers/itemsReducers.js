import * as types from '../actions/actionTypes';

// reducers
// we can also use initialState here
export const itemsHasErrored = (state = false, action) => {
  switch (action.type) {
    case types.ITEMS_HAS_ERRORED:
      return action.hasErrored;

    default:
      return state;
  }
}

export const itemsIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.ITEMS_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export const items = (state = [], action) => {
  switch (action.type) {
    case types.ITEMS_FETCH_DATA_SUCCESS:
      return action.items;

    default:
      return state;
  }
}
