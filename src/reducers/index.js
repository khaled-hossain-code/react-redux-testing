import { combineReducers } from 'redux';
import commentReducer from './comments/comments';
import authReducer from './auth/auth';

export default combineReducers({
  comments: commentReducer,
  auth: authReducer
})