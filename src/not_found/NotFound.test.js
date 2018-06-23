import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from './NotFound';

configure({ adapter: new Adapter() });

it('NotFound', () => {
  const wrapper = shallow(<NotFound />);
  expect(wrapper.find('.not-found').exists()).toEqual(true);
  expect(wrapper.find('h1').exists()).toEqual(true);
  expect(wrapper.find('h2').exists()).toEqual(true);
  expect(wrapper.find('h1').text()).toEqual('404');
  expect(wrapper.find('h2').text()).toEqual('Page not found');
});
