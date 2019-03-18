import { combineReducers } from 'redux';
import example from './example';


/**
 * Note: router must be stored as router,
 * as expected by react-router-redux
 */
export default combineReducers({
  example,
});
