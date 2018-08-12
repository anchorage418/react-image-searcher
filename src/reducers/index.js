import {combineReducers} from 'redux';
import resultImages from './resultImages';
import resultLayout from './resultLayout';
import savedImages from './savedImages';

const rootReducer = combineReducers({
  resultImages,
  resultLayout,
  savedImages,
});

export default rootReducer;