import {
  CHANGE_LAYOUT_SUCCESS
} from '../actions/actionTypes';

const initalState = {
  option: '',
  count: ''
};

export default (state = initalState, {type, payload}) => {
  switch (type) {
    case CHANGE_LAYOUT_SUCCESS:
      return Object.assign({}, {option: payload, count: payload}); 
    default:
      return state;
  }
}
