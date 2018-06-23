import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
  const wrapper = shallow(
    <App
      setWidth={jest.fn()}
      size={ { size: { width: 1200 } } }
    />
  )

  it('should render App component', () => {
    expect(wrapper.find('.app').exists()).toEqual(true);
  });
  it('matches the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
