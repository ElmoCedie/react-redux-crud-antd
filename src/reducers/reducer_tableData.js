import { FETCH_DATA, NEW_DATA, DELETE_DATA } from '../actions';

const initialState= [];

export default function (state = initialState, { type ,payload }) {
  console.log("+++++++++++++++");
  console.log(payload);
  console.log("================");
  console.log(state);

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

      case DELETE_DATA:
        return state

      default:
        return state;
    }
}
