import { FETCH_DATA, NEW_DATA, UPDATE_DATA, DELETE_DATA } from '../actions';

const initialState= [];

export default function (state = initialState, { type ,payload }) {
    switch (type) {
      case FETCH_DATA:
        if(payload){
          return payload
        }else {
          return state
        }

      case NEW_DATA:
        return [
          ...state,
          payload
        ]

      case UPDATE_DATA:
        const objIndex = state.findIndex( obj => obj.id === payload.id );
        const newState = [
          ...state.slice(0, objIndex),
          payload,
          ...state.slice(objIndex+1, state.length)
        ]
        return newState

      case DELETE_DATA:
      return state.filter(function(event) { return event.id !== payload; });

      default:
        return state;
    }
}
