import * as types from './actionTypes';
//import axios from 'axios';
import * as itemsApi from '../api/itemsApi';
//const url = 'http://5826ed963900d612000138bd.mockapi.io/items';
//const url = 'http://localhost:5000/items';

// These are action creators that return a particular action
export const itemsHasErrored = bool => {
  return {
    type: types.ITEMS_HAS_ERRORED,
    hasErrored: bool
  };
}

export const itemsIsLoading = bool => {
  return {
    type: types.ITEMS_IS_LOADING,
    isLoading: bool
  };
}

// will be called when the data has been successfully fetched
export const itemsFetchDataSuccess = items => {
  return {
    type: types.ITEMS_FETCH_DATA_SUCCESS,
    items
  }
}

// thunk middleware
// this will dispatch actions
/*
  Redux action creators don’t support asynchronous actions
  like fetching data, so here’s where we utilise Redux Thunk.
  Thunk allows you to write action creators that return a
  function instead of an action. The inner function can receive
  the store methods dispatch and getState as parameters,
  but we'll just use dispatch.
*/
/*
export const itemsFetchData = url => {
  return (dispatch) => {
    console.log('Dispatching itemsIsLoading');
    dispatch(itemsIsLoading(true)); // dispatch itemsIsLoading action

    fetch(url)    // see if we can use axios here if needed
    .then((response) => {
        if (!response.ok) {
          console.log('Error fetching data from ' + url);
          throw Error (response.statusText);
        }

        // dispatch itemsIsLoading with false
        dispatch(itemsIsLoading(false));

        return response;

      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
*/

/*
export const itemsFetchData = () => {
  return (dispatch) => {
    console.log('Dispatching itemsIsLoading');
    dispatch(itemsIsLoading(true)); // dispatch itemsIsLoading action

    fetch(url)    // see if we can use axios here if needed
    .then((response) => {
        if (!response.ok) {
          console.log('Error fetching data from ' + url);
          throw Error (response.statusText);
        }

        // dispatch itemsIsLoading with false
        dispatch(itemsIsLoading(false));

        return response;

      })
      .then((response) => response.json())
      .then((items) => dispatch(itemsFetchDataSuccess(items)))
      .catch(() => dispatch(itemsHasErrored(true)));
  };
}
*/


export const loadItems = () => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true));
    return itemsApi.getItems()
      .then((response) => response.json())
      .then((items) => {
        dispatch(itemsIsLoading(false));
        dispatch(itemsFetchDataSuccess(items));
      })
      .catch(error => {
        dispatch(itemsHasErrored(true));
        throw error;
      });
  };
}


/*
export const loadItems = () => {
  return (dispatch) => {
    dispatch(itemsIsLoading(true)); // dispatch itemsIsLoading action
    return itemsApi.getItems()
      .then(
        items => {
          dispatch(itemsIsLoading(false));
          dispatch(itemsFetchDataSuccess(items));
        }
      )
      .catch(error => {
        dispatch(itemsHasErrored(true));
        throw error;
      });
  };
}
*/
