import React from 'react';
import { mount } from 'enzyme';
import CommentBox from './CommentBox';

let wrapped, textArea, button;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
  textArea = wrapped.find('textarea');
  button = wrapped.find('button');
});

afterEach(() => {
  wrapped.unmount();
});

it('renders a textarea and a button', () => {
  expect(textArea.length).toEqual(1);
  expect(button.length).toEqual(1);
});

it('has a text area that users can type in', () => {
  const event = {
    target: {
      value: 'new comment'
    }
  }

  textArea.simulate('change', event);
  wrapped.update();
  let updatedTextArea = wrapped.find('textarea'); 
  expect(updatedTextArea.prop('value')).toEqual('new comment');
});

it('should empty input field when submit button clicked', () => {
  const event = {
    target: {
      value: 'new comment'
    }
  }

  textArea.simulate('change', event);
  wrapped.update();

  let updatedTextArea = wrapped.find('textarea'); 
  expect(updatedTextArea.prop('value')).toEqual('new comment');

  wrapped.find('form').simulate('submit');
  wrapped.update();

  let updatedTextArea1 = wrapped.find('textarea');

  expect(updatedTextArea1.prop('value')).toEqual('');
});
