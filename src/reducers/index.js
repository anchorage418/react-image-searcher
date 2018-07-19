import {combineReducers} from 'redux';
import resultImages from './resultImages';
import savedImages from './savedImages';
// import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  resultImages,
  savedImages,
  // router: routerReducer
});

export default rootReducer;