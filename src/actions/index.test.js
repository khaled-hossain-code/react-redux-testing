import { SAVE_COMMENT } from './types';
import { saveComment }  from './index';

describe('saveComment', () => {
  it('should return right type & payload', () => {
    let action = saveComment('new comment');

    expect(action.type).toEqual(SAVE_COMMENT);
    expect(action.payload).toEqual('new comment');
  })
})
