import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import LogIn  from './LogIn';

configure({ adapter: new Adapter() });

describe('Login', () => {
  const wrapper = shallow(
    <LogIn
      authentication={jest.fn()}
      isAuthenticated={false}
    />
  )

  it('should render LogIn component', () => {
    expect(wrapper.find('.login-form').exists()).toEqual(true);
  });
  it('matches the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
