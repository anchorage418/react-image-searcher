import {
  FETCH_IMAGES_START,
  FETCH_IMAGES_SUCCESS,
  SHOW_MORE_IMAGES_START,
  SHOW_MORE_IMAGES_SUCCESS,
} from '../actions/actionTypes';

const initalState = {
  result: [],
  query: {},
  loading: false,
};

export default (state = initalState, {type, payload}) => {
  switch (type) {
    case FETCH_IMAGES_START:
      return Object.assign({}, {
        ...state,
        loading: true,
      });
    case FETCH_IMAGES_SUCCESS:
      return Object.assign({}, {
        result: payload.data, 
        query: payload.query,
        loading: false,
      }); 
    case SHOW_MORE_IMAGES_START: 
      return Object.assign({}, {
        ...state,
        loading: true,
      });
    case SHOW_MORE_IMAGES_SUCCESS:
      return Object.assign({}, {
        result: [...state.result, ...payload.data], 
        query: {value: payload.query.value, page: payload.query.page},
        loading: false,
      }); 
    default:
      return state;
  }
};