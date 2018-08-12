import {
  FETCH_IMAGES_SUCCESS,
  SHOW_MORE_IMAGES_SUCCESS,
} from '../actions/actionTypes';

const initalState = {
  result: [],
  query: {},
};

export default (state = initalState, {type, payload}) => {
  switch (type) {
    case FETCH_IMAGES_SUCCESS:
      return Object.assign({}, {
        result: payload.data, 
        query: payload.query,
      }); 
    case SHOW_MORE_IMAGES_SUCCESS:
      return Object.assign({}, {
        result: [...state.result, ...payload.data], 
        query: {value: payload.query.value, page: payload.query.page},
      }); 
    default:
      return state;
  }
};