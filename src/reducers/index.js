import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './itemsReducers';

// rootReducer
export default combineReducers ({
  items,
  itemsHasErrored,
  itemsIsLoading
});
