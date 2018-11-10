import { combineReducers } from 'redux';
import commentReducer from './comments/comments';

export default combineReducers({
  comments: commentReducer
})