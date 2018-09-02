import { 
  SAVE_IMAGES_SUCCESS, 
  DELETE_IMAGE_SUCCESS, 
} from "../actions/actionTypes";
import { setToStorage, getFromStorage } from '../utils/index';

const itemsInStorageCount = getFromStorage() ? getFromStorage().length : 0;
const itemsSavedInStorage = getFromStorage() ? getFromStorage() : [];

const initalState = {
  saved: itemsSavedInStorage,
  error: '',
  count: itemsInStorageCount,
};

export default (state= initalState, {type, payload}) => {
  switch (type) {
    case SAVE_IMAGES_SUCCESS: {
      let result;
      let newArr;
      let storageItem;
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
        ),
        storageItem = getFromStorage(),
        setToStorage([...storageItem, payload])
      );
      return result;
    }
    case DELETE_IMAGE_SUCCESS: {
      let idToDelete = payload;
      let storageItem = getFromStorage();
      let filteredImg = [...storageItem.filter((img) => {
        return img.id !== idToDelete;
      })];
      setToStorage(filteredImg);
      return Object.assign({}, 
        state, 
        {
          saved: filteredImg, 
          count: state.count - 1
        }
      );
    }
    default:
      return state;
  }
};