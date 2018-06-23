import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import debounce from 'lodash/debounce';
import Layout from '../layout';
import LogIn from '../login';
import './style.scss';

const propTypes = {
  setWidth: PropTypes.func.isRequired,
  size: PropTypes.object.isRequired,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.changeWidth = debounce(width => props.setWidth(width), 200);
  }
  componentWillReceiveProps(nextProps) {
    const { size: { width } } = this.props;
    if (nextProps.size.width !== width) {
      this.changeWidth(nextProps.size.width);
    }
  }
  componentDidMount() {
    const { setWidth, size: { width } } = this.props;
    setWidth(width);
  }
  render() {
    return (
      <div className='app'>
        <Switch>
          <Route exact path='/login' component={LogIn} />
          <Route path='/' component={Layout}/>
        </Switch>
      </div>
    )
  }
}

App.propTypes = propTypes;
export default App;
