import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../Root';
import App from '../components/App/App';

beforeEach(() => {
  moxios.install();
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response:
        [{
          name: 'comment1'
        }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and diplay them', (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  wrapped.find('.fetch-comments').simulate('click');
  
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(1);
    done();
    wrapped.unmount();
  })
})