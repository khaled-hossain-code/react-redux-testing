import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './types';

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

function changeAuth() {
  return {
    type: CHANGE_AUTH
  }
}

export {
  saveComment,
  fetchComments,
  changeAuth
}