import { FETCH_DATA, NEW_DATA, DELETE_DATA, UPDATE_DATA } from './index';
import axios from 'axios';

export const fetchData = (data) => dispatch => {
    dispatch({
        type: FETCH_DATA,
        payload: data
      });
}

export const createData = (postData) => dispatch => {
    axios.post('http://localhost:3004/users',{
      ...postData
    })
      .then( res => { return res.data })
      .then( data => dispatch({
            type: NEW_DATA,
            payload: data
      })
    );
}

export const updateData = (postData) => dispatch => {
  const URL = "http://localhost:3004/users/"+postData.id;
    axios.put( URL , {
      ...postData
    })
      .then( res => { return res.data })
      .then( data => dispatch({
            type: UPDATE_DATA,
            payload: data
      })
    );
}

export const removeData = (postData) => dispatch => {
    const URL = "http://localhost:3004/users/"+postData;
    axios.delete(URL)
      .then( data => dispatch({
            type: DELETE_DATA,
            payload: postData
      })
    );
}
