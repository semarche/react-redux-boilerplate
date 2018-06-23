import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../ui_parts/Button';
import './style.scss';

const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  authentication: PropTypes.func.isRequired,
};

class LogIn extends Component {
  render() {
    const { isAuthenticated, authentication } = this.props;
    return (isAuthenticated ? <Redirect to={'/'} /> : (
        <div className='login-form'>
          <h2>LogIn form</h2>
          <h4>Click <Button text={'THERE'} onClick={authentication} /> for Log in</h4>
        </div>
      )
    )
  }
}

LogIn.propTypes = propTypes;
export default LogIn;
