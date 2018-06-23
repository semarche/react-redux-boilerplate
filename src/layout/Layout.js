import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import universal from 'react-universal-component';

import Navbar from './navbar';

import './style.scss';
const Dashboard = universal(() => import('../dashboard'));
const Profile = universal(() => import('../profile'));
const NotFound = universal(() => import('../not_found'));

const propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

class Layout extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      !isAuthenticated ? <Redirect to={'/login'} /> : (
        <div className='layout'>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/profile' component={Profile}/>
            <Route component={NotFound} status={404} />
          </Switch>
        </div>
      )
    )
  }
}

Layout.propTypes = propTypes;
export default Layout;
