import { 
  SAVE_IMAGES_SUCCESS 
} from "../actions/actionTypes";

const initalState = {};

export default (state= initalState, {type, payload}) => {
  switch (type) {
    case SAVE_IMAGES_SUCCESS:
      console.log('!!!!', Object.assign({}, state, payload));
      return Object.assign({}, state, payload);
    default:
      return state;
  }
}