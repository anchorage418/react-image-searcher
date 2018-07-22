import {combineReducers} from 'redux';
import resultImages from './resultImages';
import resultLayout from './resultLayout';
import savedImages from './savedImages';
// import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  resultImages,
  resultLayout,
  savedImages,
  // router: routerReducer
});

export default rootReducer;