import { FETCH_DATA, NEW_DATA, DELETE_DATA } from './index';
import axios from 'axios';

export const fetchData = (data) => dispatch => {
  // console.log(data);
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

export const removeData = (postData) => dispatch => {
  console.log(postData);
    const URL = "http://localhost:3004/users/"+postData;
    axios.delete(URL)
      .then( res => { return res.data } )
      .then( data => dispatch({
            type: DELETE_DATA,
            payload: data
      })
    );
}
