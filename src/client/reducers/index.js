import { combineReducers } from 'redux';
import blueActions         from './blueButton';
import redActions          from './redButton';

export default const reducers = combineReducers({
  blueActions,
  redActions
});
