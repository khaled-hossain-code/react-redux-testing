import commentReducer from './comments';
import { SAVE_COMMENT } from '../../actions/types';


it('handles action fo type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'new comment'
  };

  const newState = commentReducer([],action);
  expect(newState).toEqual([action.payload]);
});

it('should return default state for unknown types', () => {
  const newState = commentReducer([],{});
  expect(newState).toEqual([]);
})