import { 
  SAVE_IMAGES_SUCCESS, 
  DELETE_IMAGE_SUCCESS, 
} from "../actions/actionTypes";

const initalState = {
  saved: [],
  error: '',
  count: 0,
};

export default (state= initalState, {type, payload}) => {
  switch (type) {
    case SAVE_IMAGES_SUCCESS: {
      let result;
      let newArr;
      state.saved.find((value) => {
        return value.id === payload.id;
      }) ?
      result = Object.assign({}, 
        state, 
        {error: 'This image has already been saved'}
      ) : (
        newArr = state.saved.concat(payload),
        result = Object.assign({}, 
          state, 
          {saved: newArr, count: newArr.length}
        )
      );
      return result;
    }
    case DELETE_IMAGE_SUCCESS: {
      let idToDelete = payload;
      return Object.assign({}, 
        state, 
        {
          saved: [...state.saved.filter((value) => {
            return value.id !== idToDelete;
          })], 
          count: state.count - 1
        }
      );
    }
    default:
      return state;
  }
};