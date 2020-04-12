import { handleError, handleResponse } from './apiHelper';
import axios from 'axios';
const url = 'http://5826ed963900d612000138bd.mockapi.io/items';

/*
export const getItems = () => {
  return fetch(url)
  //return axios.get(url)
    .then(handleResponse)
    .error(handleError);
}
*/

export const getItems = () => {
  console.log('getItems...');
  return fetch(url)
    .then(
      (response) => {
        //handleResponse(response);
        if (!response.ok) {
          console.log('Error fetching data from ' + url);
          throw Error(response.statusText);
        }
        return response;
      })
    .catch((error) => {
      console.error("API call failed. " + error);
      throw error;
    });
}
