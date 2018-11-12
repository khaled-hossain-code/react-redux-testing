import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS } from './types';

function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  }
}

function fetchComments() {
  return async (dispatch) => {
    const response = await axios.get('http://jsonplaceholder.typicode.com/comments');
    dispatch({
      type: FETCH_COMMENTS,
      payload: response
    });
  }
}

export {
  saveComment,
  fetchComments
}