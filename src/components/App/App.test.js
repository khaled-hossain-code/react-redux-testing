import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

import ComponentBox from '../ComponentBox/CommentBox';
import ComponentList from '../ComponentList/CommentList';

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it('shows a component box', () => {
  expect(wrapped.find(ComponentBox).length).toEqual(1);
});

it('shows a component list', () => {
  expect(wrapped.find(ComponentList).length).toEqual(1);
});