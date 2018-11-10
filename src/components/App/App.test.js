import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

import ComponentBox from '../ComponentBox/CommentBox';
import ComponentList from '../ComponentList/CommentList';


it('shows a component box', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(ComponentBox).length).toEqual(1);
});

it('shows a component list', () => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(ComponentList).length).toEqual(1);
});