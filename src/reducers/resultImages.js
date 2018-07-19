import {
  FETCH_IMAGES_SUCCESS
} from '../actions/actionTypes';

const initalState = {};

export default (state = initalState, {type, payload}) => {
  switch (type) {
    case FETCH_IMAGES_SUCCESS:
      // console.log("reducer success", Object.assign({}, payload));
      return Object.assign({}, payload);
    default:
      return state;
  }
}