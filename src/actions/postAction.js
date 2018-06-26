import { FETCH_DATA, NEW_DATA, DELETE_DATA, UPDATE_DATA } from './index';
import axios from 'axios';

export const fetchData = (state) => dispatch => {
    dispatch({
        type: FETCH_DATA,
        payload: state
      });
}

export const createData = (state) => dispatch => {
    axios.post('http://localhost:3004/users',{
      ...state
    })
      .then( res => { return res.data })
      .then( data => dispatch({
            type: NEW_DATA,
            payload: data
      })
    );
}

export const updateData = (state) => dispatch => {
  const URL = "http://localhost:3004/users/"+state.id;
    axios.put( URL , {
      ...state
    })
      .then( res => { return res.data })
      .then( data => dispatch({
            type: UPDATE_DATA,
            payload: data
      })
    );
}

export const removeData = (state) => dispatch => {
    const URL = "http://localhost:3004/users/"+state;
    axios.delete(URL)
      .then( data => dispatch({
            type: DELETE_DATA,
            payload: state
      })
    );
}
