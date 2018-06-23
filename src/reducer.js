import { combineReducers } from 'redux';
import app from './app/module/reducers';

const reducer = combineReducers({
  app,
});

export default reducer;
