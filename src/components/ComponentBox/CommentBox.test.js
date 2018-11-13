import React from 'react';
import {
  mount
} from 'enzyme';
import CommentBox from './CommentBox';
import Root from '../../Root';

let wrapped, textArea, button;

beforeEach(() => {
  wrapped = mount( 
  <Root>
    < CommentBox />
  </Root>);
  textArea = wrapped.find('textarea');
  button = wrapped.find('button');
});

afterEach(() => {
  wrapped.unmount();
});

it('renders a textarea and a button', () => {
  expect(textArea.length).toEqual(1);
  expect(button.length).toEqual(2);
});

describe('CommentBox component', () => {
  let event;

  beforeEach(() => {
    event = {
      target: {
        value: 'new comment'
      }
    }
    textArea.simulate('change', event);
    wrapped.update();
  });

  it('has a text area that users can type in', () => {
    let updatedTextArea = wrapped.find('textarea');
    expect(updatedTextArea.prop('value')).toEqual('new comment');
  });

  it('should empty input field when submit button clicked', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();

    let updatedTextArea1 = wrapped.find('textarea');

    expect(updatedTextArea1.prop('value')).toEqual('');
  });
});