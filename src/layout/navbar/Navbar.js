import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.scss'

const propTypes = {
  authentication: PropTypes.func.isRequired,
};

class Navbar extends Component {
  render() {
    const { authentication } = this.props;
    return (
      <div className={'top-navbar'}>
        <div className={'left-part'}>
          <NavLink
            to={'/'}
            activeClassName="selected"
          >Home</NavLink>
          <NavLink
            to={'/profile'}
            activeClassName="selected"
          >Profiles</NavLink>
        </div>
        <div className={'right-part'}>
          <h4 onClick={authentication}>Log out</h4>
        </div>
      </div>
    )
  }
}

Navbar.propTypes = propTypes;
export default Navbar;
