import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Navbar  from './Navbar';

configure({ adapter: new Adapter() });

describe('Navbar', () => {
  const wrapper = shallow(
    <Navbar
      authentication={jest.fn()}
    />
  );
  it('should render top-navbar', () => {
    expect(wrapper.find('.top-navbar').exists()).toEqual(true);
  });

  it('matches the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
